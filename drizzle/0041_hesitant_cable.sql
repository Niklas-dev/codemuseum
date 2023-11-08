CREATE TABLE IF NOT EXISTS "users_to_groups" (
	"tag_name" integer NOT NULL,
	"post_pk" integer NOT NULL,
	CONSTRAINT users_to_groups_tag_name_post_pk PRIMARY KEY("tag_name","post_pk")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_groups" ADD CONSTRAINT "users_to_groups_tag_name_tags_name_fk" FOREIGN KEY ("tag_name") REFERENCES "tags"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_groups" ADD CONSTRAINT "users_to_groups_post_pk_post_pk_fk" FOREIGN KEY ("post_pk") REFERENCES "post"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
