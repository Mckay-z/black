import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

export async function GET() {
  const payload = await getPayload({ config });
  
  const existingUsers = await payload.find({
    collection: "users",
    where: { email: { equals: "admin@blackinrehab.org" } },
  });

  if (existingUsers.docs.length > 0) {
    await payload.update({
      collection: "users",
      id: existingUsers.docs[0].id,
      data: { password: "password123", Name: "Admin" }
    });
    return NextResponse.json({ message: "Updated existing admin user 'admin@blackinrehab.org' password to 'password123'" });
  } else {
    await payload.create({
      collection: "users",
      data: {
        email: "admin@blackinrehab.org",
        password: "password123",
        Name: "Admin"
      },
    });
    return NextResponse.json({ message: "Created new admin user 'admin@blackinrehab.org' with password 'password123'" });
  }
}
