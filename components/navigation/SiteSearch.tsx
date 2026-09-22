"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CornerDownLeft, Search, X } from "lucide-react";

import { SUGGESTED, searchPages, type SearchEntry } from "@/lib/search";

/**
 * Site search: a way to reach any page by name.
 *
 * The menu can hold about twenty destinations before it stops being a menu.
 * The site has sixty, so the rest are reachable only by knowing which section
 * they hide under — which is fine for us and not fine for a visitor who just
 * wants the scholarship form.
 *
 * This searches page NAMES, not page content. See `lib/search.ts` for what is
 * in the index and where it comes from.
 *
 * ── Shape ───────────────────────────────────────────────────────────────
 *
 * Three exports rather than one component, because the two triggers live in
 * different corners of the header (the desktop bar and the mobile controls)
 * while there must only ever be one dialog and one hotkey listener. The
 * header owns the open/closed boolean; everything else about search lives in
 * this file.
 *
 * Built on the native `<dialog>` element, which supplies the focus trap, the
 * inert background and Escape-to-close — all three of which are easy to get
 * subtly wrong by hand, and all three of which matter more here than usual
 * because this is the one control on the site a keyboard user will reach for
 * first.
 */

/* ── Hotkey ─────────────────────────────────────────────────────────────── */

/**
 * ⌘K / Ctrl-K, the convention for this control.
 *
 * Deliberately NOT bound to bare "/" as well: the site has several pages with
 * free-text fields, and a global single-character hotkey steals the first
 * keystroke from anyone who starts typing before the field takes focus.
 */
export function useSearchHotkey(onOpen: () => void) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "k") return;
      if (!event.metaKey && !event.ctrlKey) return;
      event.preventDefault();
      onOpen();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpen]);
}

/* ── Trigger ────────────────────────────────────────────────────────────── */

/* The platform never changes mid-session, so there is nothing to subscribe to
   and nothing to unsubscribe. Defined out here so the identities are stable
   across renders, which is what `useSyncExternalStore` expects. */
const subscribeToNothing = () => () => {};
const getShortcut = () =>
  /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent)
    ? "⌘K"
    : "Ctrl K";
const getServerShortcut = () => null;

export function SearchTrigger({
  onClick,
  variant,
}: {
  onClick: () => void;
  /** `bar` is the desktop pill with the shortcut hint; `icon` is the round
      button that matches the other mobile controls. */
  variant: "bar" | "icon";
}) {
  // The shortcut hint is the only platform-dependent thing here, and the
  // server cannot know the platform. `useSyncExternalStore` is the way to read
  // a browser-only value without a hydration mismatch: the server snapshot is
  // null, the client's is the real one, and React swaps them after hydrating.
  // (A `useState` + `useEffect` pair does the same job with an extra render,
  // which is what the set-state-in-effect rule is there to prevent.)
  const shortcut = useSyncExternalStore(
    subscribeToNothing,
    getShortcut,
    getServerShortcut,
  );

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Search the site"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/60 hover:text-primary"
      >
        {/* 44px button, 20px glyph — the same pair as the menu button it sits
            beside, so the two ends of the mobile control row match. */}
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>
    );
  }

  /*
    Geometry is ThemeToggle's, deliberately: 40px tall, 40px square while it is
    icon-only, same radius, same border, same 20px icon. The two sit next to
    each other in the header, so anything else reads as one of them being
    wrong — which it was, at 32px tall with a 16px icon.

    From there it collapses as the header runs out of room. At `lg` the bar is
    already carrying a logo, seven nav items, the theme toggle and DONATE, so
    search is a plain icon; the label arrives at `xl` and the shortcut hint at
    `2xl`. The button keeps its accessible name at every size — which is what
    `sr-only` is doing below rather than `hidden`.

    Padding tracks that: even `px-4` once the label shows, tightening on the
    right only at `2xl`, where the chip needs the room and supplies its own
    visual inset.
  */
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-border bg-surface text-sm text-muted transition-colors hover:border-primary/60 hover:text-primary xl:w-auto xl:px-4 2xl:pr-2"
    >
      <Search className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="sr-only font-medium xl:not-sr-only">Search</span>
      {/* Presentational: the accessible name is the word "Search" above, and
          reading out a keyboard shortcut mid-sentence helps nobody. */}
      <span
        aria-hidden="true"
        className="hidden rounded-md border border-border px-1.5 py-1 text-[0.65rem] font-semibold leading-none tracking-wide text-muted 2xl:inline-block"
      >
        {shortcut ?? " "}
      </span>
    </button>
  );
}

/* ── Dialog ─────────────────────────────────────────────────────────────── */

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const listId = useId();

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedFor, setHighlightedFor] = useState("");

  const trimmed = query.trim();

  /*
    A new query invalidates the old highlight — otherwise arrowing to the
    fourth result and then typing another letter leaves the highlight on
    whatever now happens to be fourth.

    Adjusted during render rather than in an effect. React documents this
    pattern for exactly this case (state derived from a prop or another piece
    of state): it re-renders before committing, so nothing ever paints with
    the stale index, where an effect would paint once and then correct itself.
  */
  if (highlightedFor !== trimmed) {
    setHighlightedFor(trimmed);
    setActiveIndex(0);
  }
  const results = useMemo(
    () => (trimmed ? searchPages(trimmed) : SUGGESTED),
    [trimmed],
  );
  const isSuggesting = !trimmed;

  // Drive the native dialog from the prop. `showModal` is what gives us the
  // focus trap and the inert background; simply rendering the element does not.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      setQuery("");
      setActiveIndex(0);
      // Safari does not always focus the autofocus target inside showModal.
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // The dialog can close without us: Escape, or the backdrop. Keep the prop in
  // step rather than letting the two disagree.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onNativeClose = () => onClose();
    dialog.addEventListener("close", onNativeClose);
    return () => dialog.removeEventListener("close", onNativeClose);
  }, [onClose]);

  // Navigating away should not leave the dialog sitting over the new page.
  useEffect(() => {
    if (open) onClose();
    // Only when the route actually changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const go = useCallback(
    (href: string) => {
      onClose();
      router.push(href);
    },
    [onClose, router],
  );

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => (i + 1) % results.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => (i - 1 + results.length) % results.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(results.length - 1);
        break;
      case "Enter":
        event.preventDefault();
        go(results[activeIndex].href);
        break;
    }
  };

  // Keep the highlighted row on screen when arrowing past the fold.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const optionId = (index: number) => `${listId}-option-${index}`;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Search the site"
      // `showModal` centres the dialog; this pins it near the top instead,
      // where a search field belongs, and keeps it clear of the safe area.
      className="search-dialog w-[min(37rem,calc(100vw-2rem))] rounded-[var(--radius-card)] border border-border bg-surface p-0 text-foreground shadow-float backdrop:bg-black/55 backdrop:backdrop-blur-sm"
      // A click that lands on the dialog element itself is a click on the
      // padding around the panel — i.e. the backdrop.
      onMouseDown={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="flex items-center gap-3 border-b border-border px-4">
        <Search className="h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search for a page…"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            results.length ? optionId(activeIndex) : undefined
          }
          className="w-full bg-transparent py-4 text-base text-foreground outline-none placeholder:text-muted"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-primary/10 hover:text-foreground"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="max-h-[min(24rem,60vh)] overflow-y-auto overscroll-contain p-2">
        {isSuggesting && (
          <p className="px-3 pb-1 pt-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
            Popular pages
          </p>
        )}

        {results.length > 0 ? (
          <ul ref={listRef} id={listId} role="listbox" aria-label="Search results">
            {results.map((entry, index) => (
              <Result
                key={entry.href}
                entry={entry}
                id={optionId(index)}
                index={index}
                active={index === activeIndex}
                onHover={() => setActiveIndex(index)}
                onSelect={() => go(entry.href)}
              />
            ))}
          </ul>
        ) : (
          <p className="px-3 py-8 text-center text-sm text-muted">
            Nothing matches <span className="text-foreground">“{trimmed}”</span>.
            Try a page name, a place, or{" "}
            <Link
              href="/contact"
              onClick={onClose}
              className="font-semibold text-primary hover:text-primary-hover"
            >
              ask us
            </Link>
            .
          </p>
        )}
      </div>

      {/* Screen readers get the count; sighted users can see it. */}
      <p aria-live="polite" className="sr-only">
        {trimmed
          ? `${results.length} ${results.length === 1 ? "result" : "results"} for ${trimmed}`
          : ""}
      </p>

      <div className="hidden items-center gap-4 border-t border-border px-4 py-2.5 text-[0.7rem] text-muted sm:flex">
        <span className="flex items-center gap-1.5">
          <Key>↑</Key>
          <Key>↓</Key>
          to navigate
        </span>
        <span className="flex items-center gap-1.5">
          <Key>
            <CornerDownLeft className="h-2.5 w-2.5" aria-hidden="true" />
          </Key>
          to open
        </span>
        <span className="flex items-center gap-1.5">
          <Key>esc</Key>
          to close
        </span>
      </div>
    </dialog>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex min-h-4.5 min-w-4.5 items-center justify-center rounded border border-border px-1 font-sans text-[0.65rem] leading-none text-muted">
      {children}
    </kbd>
  );
}

function Result({
  entry,
  id,
  index,
  active,
  onHover,
  onSelect,
}: {
  entry: SearchEntry;
  id: string;
  index: number;
  active: boolean;
  onHover: () => void;
  onSelect: () => void;
}) {
  return (
    <li>
      <Link
        id={id}
        href={entry.href}
        role="option"
        aria-selected={active}
        data-index={index}
        // Arrow keys move the highlight; Tab would give the list a second,
        // conflicting cursor. This is the command-palette convention.
        tabIndex={-1}
        onMouseEnter={onHover}
        onClick={(event) => {
          // Let modified clicks open in a new tab as any link would.
          if (event.metaKey || event.ctrlKey || event.shiftKey) return;
          event.preventDefault();
          onSelect();
        }}
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
          active ? "bg-primary/10" : ""
        }`}
      >
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-2">
            <span
              className={`text-sm font-semibold ${
                active ? "text-primary" : "text-foreground"
              }`}
            >
              {entry.title}
            </span>
            {entry.section && (
              <span className="text-[0.7rem] uppercase tracking-wider text-muted">
                {entry.section}
              </span>
            )}
          </span>
          <span className="mt-0.5 block truncate text-xs text-muted">
            {entry.description}
          </span>
        </span>

        <CornerDownLeft
          className={`h-3.5 w-3.5 shrink-0 text-primary transition-opacity ${
            active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}
