"use client";

import { useFormFields } from "@payloadcms/ui";
import React from "react";

/**
 * Shows the photo the site uses today, above the replacement picker, so an
 * editor can see what they are about to change. Reads the original's path from
 * the hidden `defaultPath` field of the same record.
 */
export function CurrentPhoto() {
  const path = useFormFields(([fields]) => fields.defaultPath?.value) as
    | string
    | undefined;

  if (!path) return null;

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Original photo</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={path}
        alt="The original photo used on the site"
        style={{
          maxWidth: "24rem",
          width: "100%",
          height: "auto",
          borderRadius: "0.5rem",
          border: "1px solid var(--theme-elevation-150)",
        }}
      />
      <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", opacity: 0.7 }}>
        The replacement below is used on the website. If it is empty, the original stays.
      </p>
    </div>
  );
}
