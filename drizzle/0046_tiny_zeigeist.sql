ALTER TABLE "usersToGroups" RENAME TO "tagsToPosts";--> statement-breakpoint
ALTER TABLE "tagsToPosts" DROP CONSTRAINT "usersToGroups_tag_name_tags_name_fk";
--> statement-breakpoint
ALTER TABLE "tagsToPosts" DROP CONSTRAINT "usersToGroups_post_pk_post_pk_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tagsToPosts" ADD CONSTRAINT "tagsToPosts_tag_name_tags_name_fk" FOREIGN KEY ("tag_name") REFERENCES "tags"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tagsToPosts" ADD CONSTRAINT "tagsToPosts_post_pk_post_pk_fk" FOREIGN KEY ("post_pk") REFERENCES "post"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
