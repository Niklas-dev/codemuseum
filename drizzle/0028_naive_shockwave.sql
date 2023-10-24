DO $$ BEGIN
 CREATE TYPE "language" AS ENUM('python', 'javascript', 'typescript');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "language_short" AS ENUM('py', 'js', 'ts');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "post" ADD COLUMN "language" "language";--> statement-breakpoint
ALTER TABLE "post" ADD COLUMN "language_short" "language_short";