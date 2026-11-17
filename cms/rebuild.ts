/**
 * Photo replacements are applied when the site is built, so saving one in the
 * dashboard asks Vercel for a fresh build through a Deploy Hook. The new photo
 * is live a couple of minutes later.
 *
 * Set `VERCEL_DEPLOY_HOOK_URL` (Project Settings → Git → Deploy Hooks). Unset,
 * nothing happens and the replacement goes live with the next deploy instead.
 * A failure here must never stop the save, so it is swallowed and logged.
 */
let lastTriggered = 0;

export async function requestRebuild() {
  const url = process.env.VERCEL_DEPLOY_HOOK_URL;
  if (!url) return;

  // A burst of saves (replacing several photos in a row) needs one build, not
  // one each. Vercel also queues builds, so this only trims the noise.
  const now = Date.now();
  if (now - lastTriggered < 30_000) return;
  lastTriggered = now;

  try {
    await fetch(url, { method: "POST" });
  } catch (error) {
    console.error("[site-images] could not trigger a rebuild:", error);
  }
}
