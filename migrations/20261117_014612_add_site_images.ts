import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"group" varchar,
  	"key" varchar NOT NULL,
  	"default_path" varchar,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "site_images_id" integer;
  ALTER TABLE "site_images" ADD CONSTRAINT "site_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "site_images_group_idx" ON "site_images" USING btree ("group");
  CREATE UNIQUE INDEX "site_images_key_idx" ON "site_images" USING btree ("key");
  CREATE INDEX "site_images_image_idx" ON "site_images" USING btree ("image_id");
  CREATE INDEX "site_images_updated_at_idx" ON "site_images" USING btree ("updated_at");
  CREATE INDEX "site_images_created_at_idx" ON "site_images" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_site_images_fk" FOREIGN KEY ("site_images_id") REFERENCES "public"."site_images"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_site_images_id_idx" ON "payload_locked_documents_rels" USING btree ("site_images_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_images" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "site_images" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_site_images_fk";
  
  DROP INDEX "payload_locked_documents_rels_site_images_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "site_images_id";`)
}
