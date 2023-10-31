ALTER TABLE "likes" DROP CONSTRAINT "likes_post_id_post_pk_fk";
--> statement-breakpoint
ALTER TABLE "likes" DROP CONSTRAINT "likes_user_id_user_pk_fk";
--> statement-breakpoint
ALTER TABLE "likes" ADD COLUMN "post_pk" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "likes" ADD COLUMN "user_pk" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_post_pk_post_pk_fk" FOREIGN KEY ("post_pk") REFERENCES "post"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_user_pk_user_pk_fk" FOREIGN KEY ("user_pk") REFERENCES "user"("pk") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "likes" DROP COLUMN IF EXISTS "post_id";--> statement-breakpoint
ALTER TABLE "likes" DROP COLUMN IF EXISTS "user_id";