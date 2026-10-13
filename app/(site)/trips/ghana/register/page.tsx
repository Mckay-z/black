import { redirect } from "next/navigation";

/**
 * The Ghana application now lives on Cognito Forms, at the client's request.
 * This route used to hold our own application form; it is kept as a redirect
 * so existing links, bookmarks and the search index still land somewhere
 * useful rather than on a form nobody reviews.
 */
export default function GhanaRegisterPage() {
  redirect(
    "https://www.cognitoforms.com/BlackInRehab1/SANKOFAMISSIONSHEALINGBEYONDBORDERSGHANA",
  );
}
