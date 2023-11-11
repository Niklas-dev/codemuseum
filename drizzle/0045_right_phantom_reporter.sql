ALTER TABLE "tags" ADD PRIMARY KEY ("name");--> statement-breakpoint
ALTER TABLE "tags" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "tags" ADD COLUMN "color" text;