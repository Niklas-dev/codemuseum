ALTER TABLE "likes" ADD CONSTRAINT "likes_post_pk_unique" UNIQUE("post_pk");--> statement-breakpoint
ALTER TABLE "likes" ADD CONSTRAINT "likes_user_pk_unique" UNIQUE("user_pk");