import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
  pgEnum,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";

export const languageEnum = pgEnum("language", [
  "python",
  "javascript",
  "typescript",
]);
export const languageShortEnum = pgEnum("language_short", ["py", "js", "ts"]);

export const likes = pgTable("likes", {
  postPk: integer("post_pk")
    .notNull()
    .references(() => posts.pk),
  userPk: integer("user_pk")
    .notNull()
    .references(() => users.pk),
});

export const posts = pgTable("post", {
  pk: serial("pk").notNull().primaryKey(),
  code: text("content"),
  language: languageEnum("language"),
  language_short: languageShortEnum("language_short"),
  likes: integer("likes"),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.pk),
});

export const users = pgTable("user", {
  pk: serial("pk").notNull().primaryKey(),
  id: text("id").notNull().unique(),
  username: text("username").unique(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});
export const likesRelations = relations(likes, ({ one }) => ({
  user: one(users, {
    fields: [likes.userPk],
    references: [users.pk],
  }),
  post: one(posts, {
    fields: [likes.postPk],
    references: [posts.pk],
  }),
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.pk],
  }),
  likes: many(likes),
}));

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  likes: many(likes),
}));

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);
