/* THIS FILE IS PART OF THE PAYLOAD ADMIN PANEL.
 * Payload's REST API — login, content CRUD, uploads. The public site's own
 * form endpoints live under /api/forms/* in the (site) tree, which Payload
 * ignores because it only claims paths it recognises.
 */
import config from "@payload-config";
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from "@payloadcms/next/routes";

export const GET = REST_GET(config);
export const POST = REST_POST(config);
export const DELETE = REST_DELETE(config);
export const PATCH = REST_PATCH(config);
export const PUT = REST_PUT(config);
export const OPTIONS = REST_OPTIONS(config);
