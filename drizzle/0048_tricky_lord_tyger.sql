ALTER TABLE "user" ALTER COLUMN "bio" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "location" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "username" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "username" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "name" SET DEFAULT '';