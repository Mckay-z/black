import type { Access } from "payload";

/** Anyone may read published content — the public site is unauthenticated. */
export const anyone: Access = () => true;

/** Any signed-in dashboard user (admin or editor). */
export const signedIn: Access = ({ req: { user } }) => Boolean(user);

/** Administrators only. */
export const adminOnly: Access = ({ req: { user } }) => user?.role === "admin";

/**
 * Public readers see only published documents; signed-in staff see drafts too,
 * so the dashboard preview shows work in progress.
 */
export const publishedOrSignedIn: Access = ({ req: { user } }) => {
  if (user) return true;
  return { status: { equals: "published" } };
};
