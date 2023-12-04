ALTER TABLE "user" ALTER COLUMN "bio" SET DEFAULT 'Hey, I haven't set my bio yet.';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "location" SET DEFAULT 'Not here';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "name" DROP DEFAULT;