ALTER TABLE "post" DROP CONSTRAINT "post_author_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "post" ALTER COLUMN "author_id" SET DATA TYPE integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_author_id_user_pk_fk" FOREIGN KEY ("author_id") REFERENCES "user"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
