/**
 * Turns whatever video address the client pasted into the dashboard into
 * something renderable.
 *
 * The Media collection accepts images only, and uploading raw video to Vercel
 * Blob is the wrong shape for this site anyway — so a story's video lives on
 * YouTube or Vimeo and is referenced by link. A direct file address still
 * works for anything self-hosted.
 *
 * Anything unrecognised returns null, and the caller falls back to showing the
 * poster image on its own rather than an empty embed.
 */

export type EmbeddedVideo =
  | { kind: "iframe"; src: string }
  | { kind: "file"; src: string };

const FILE_EXTENSIONS = /\.(mp4|webm|ogg|mov)$/i;

export function parseVideoUrl(input?: string | null): EmbeddedVideo | null {
  if (!input) return null;

  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, "");

  // youtu.be/<id>
  if (host === "youtu.be") {
    const id = url.pathname.slice(1);
    return id ? youtube(id) : null;
  }

  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    // /watch?v=<id>
    const queryId = url.searchParams.get("v");
    if (queryId) return youtube(queryId);
    // /embed/<id>, /shorts/<id>, /live/<id>
    const pathId = url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?#]+)/)?.[1];
    if (pathId) return youtube(pathId);
    return null;
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    // Both vimeo.com/<id> and player.vimeo.com/video/<id>; an unlisted video
    // carries a second path segment as its privacy hash.
    const match = url.pathname.match(/(?:\/video)?\/(\d+)(?:\/([\w-]+))?/);
    if (!match) return null;
    const [, id, hash] = match;
    const query = hash ? `?h=${hash}` : "";
    return { kind: "iframe", src: `https://player.vimeo.com/video/${id}${query}` };
  }

  if (FILE_EXTENSIONS.test(url.pathname)) {
    return { kind: "file", src: url.toString() };
  }

  return null;
}

function youtube(id: string): EmbeddedVideo {
  // nocookie spares viewers a tracking cookie until they actually press play.
  return { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${id}` };
}
