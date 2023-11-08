ALTER TABLE "users_to_groups" RENAME TO "usersToGroups";--> statement-breakpoint
ALTER TABLE "usersToGroups" DROP CONSTRAINT "users_to_groups_tag_name_tags_name_fk";
--> statement-breakpoint
ALTER TABLE "usersToGroups" DROP CONSTRAINT "users_to_groups_post_pk_post_pk_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToGroups" ADD CONSTRAINT "usersToGroups_tag_name_tags_name_fk" FOREIGN KEY ("tag_name") REFERENCES "tags"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToGroups" ADD CONSTRAINT "usersToGroups_post_pk_post_pk_fk" FOREIGN KEY ("post_pk") REFERENCES "post"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
