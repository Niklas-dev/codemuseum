ALTER TABLE "user" DROP CONSTRAINT "user_pk_unique";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_id_unique" UNIQUE("id");