ALTER TABLE "tags" ADD PRIMARY KEY ("name");--> statement-breakpoint
ALTER TABLE "tags" ALTER COLUMN "name" SET NOT NULL;