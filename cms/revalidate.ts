import { revalidatePath } from "next/cache";
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionConfig,
  GlobalAfterChangeHook,
  GlobalConfig,
} from "payload";

/**
 * Public pages are built once and then served as saved copies, so a change
 * saved in the dashboard would not appear until the next deploy. These hooks
 * throw those copies away after every save, publish or delete, and the next
 * visitor gets a fresh page.
 *
 * The whole site is refreshed rather than hand-picking pages: content here is
 * shared across pages (people, heroes, stats, media), and a missed page would
 * look like the dashboard not working.
 *
 * A failure here must never stop the save itself. `revalidatePath` also throws
 * outside a Next request (the Payload CLI, seeds, migrations), so it is caught.
 */
function refresh() {
  try {
    revalidatePath("/", "layout");
  } catch {
    // Not inside a Next request — nothing to refresh.
  }
}

const afterChange: CollectionAfterChangeHook & GlobalAfterChangeHook = ({ doc }) => {
  refresh();
  return doc;
};

const afterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  refresh();
  return doc;
};

/** Add the refresh hooks to a collection that feeds the public site. */
export function withRevalidate(collection: CollectionConfig): CollectionConfig {
  return {
    ...collection,
    hooks: {
      ...collection.hooks,
      afterChange: [...(collection.hooks?.afterChange ?? []), afterChange],
      afterDelete: [...(collection.hooks?.afterDelete ?? []), afterDelete],
    },
  };
}

/** Same, for a global such as the site settings. */
export function withRevalidateGlobal(global: GlobalConfig): GlobalConfig {
  return {
    ...global,
    hooks: {
      ...global.hooks,
      afterChange: [...(global.hooks?.afterChange ?? []), afterChange],
    },
  };
}
