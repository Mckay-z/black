/**
 * Theme constants shared by the server layout and the client provider.
 *
 * These must NOT live in a "use client" module: exports of a client module
 * become client references and read as `undefined` when a Server Component
 * imports them, which would silently break the no-flash script.
 */
export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "bir-theme";
