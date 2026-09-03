import { redirect } from "next/navigation";

// Alias kept so existing navigation and inbound links keep working.
export default function Page() {
  redirect("/experiences/conference");
}
