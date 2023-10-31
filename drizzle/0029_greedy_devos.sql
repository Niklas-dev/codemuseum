/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'likes'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "likes" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "likes" ALTER COLUMN "post_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "likes" ADD COLUMN "user_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "post" ADD COLUMN "pk" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_post_id_post_pk_fk" FOREIGN KEY ("post_id") REFERENCES "post"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_user_id_user_pk_fk" FOREIGN KEY ("user_id") REFERENCES "user"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "likes" DROP COLUMN IF EXISTS "author_id";--> statement-breakpoint
ALTER TABLE "post" DROP COLUMN IF EXISTS "id";