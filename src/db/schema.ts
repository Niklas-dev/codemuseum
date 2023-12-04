import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
  pgEnum,
  varchar,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { InferModel, relations, sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

const randomUUID = (length: number = 10) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let username = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters.charAt(randomIndex);
  }
  console.log(username);

  return username;
};
export const languageEnum = pgEnum("language", [
  "python",
  "javascript",
  "typescript",
]);
export const languageShortEnum = pgEnum("language_short", ["py", "js", "ts"]);

export const tags = pgTable("tags", {
  pk: serial("pk").notNull(),
  name: text("name").primaryKey(),
  color: text("color"),
  logo: text("logo"),
});

export const likes = pgTable(
  "likes",
  {
    pk: serial("pk").notNull(),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
    postPk: integer("post_pk")
      .notNull()
      .references(() => posts.pk),
    userPk: integer("user_pk")
      .notNull()
      .references(() => users.pk),
  },
  (like) => ({
    compoundKey: primaryKey({ columns: [like.userPk, like.postPk] }),
  })
);

export const posts = pgTable("post", {
  pk: serial("pk").notNull().primaryKey(),
  title: text("title").notNull(),
  code: text("code").notNull(),
  language: languageEnum("language").notNull(),
  language_short: languageShortEnum("language_short").notNull(),
  likes: integer("likes"),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.pk),
});

export const users = pgTable("user", {
  pk: serial("pk").notNull().primaryKey(),
  id: text("id").notNull().unique(),
  bio: varchar("bio", { length: 255 }).default(
    "Hey, I haven't set my bio yet."
  ),
  location: varchar("location", { length: 36 }).default("Not here"),
  username: text("username")
    .default(sql`gen_random_uuid()`)
    .unique(),
  name: text("name").default(""),
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
  tagsToPosts: many(tags),
}));

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  likes: many(likes),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  tagsToPosts: many(posts),
}));

export const tagsToPosts = pgTable(
  "tagsToPosts",
  {
    tagName: text("tag_name")
      .notNull()
      .references(() => tags.name),
    postPk: integer("post_pk")
      .notNull()
      .references(() => posts.pk),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.tagName, t.postPk] }),
  })
);
export const tagsToPostsRelations = relations(tagsToPosts, ({ one }) => ({
  post: one(posts, {
    fields: [tagsToPosts.postPk],
    references: [posts.pk],
  }),
  tag: one(tags, {
    fields: [tagsToPosts.tagName],
    references: [tags.name],
  }),
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

// zod schemas

export const insertPostSchema = createInsertSchema(posts, {
  title: (schema) => schema.title.min(1),
  code: (schema) => schema.code.min(1),
  language: (schema) => schema.language,
  language_short: (schema) => schema.language_short,
  authorId: (schema) => schema.authorId.optional(),
});

export const insertLikeSchema = createInsertSchema(likes, {
  postPk: (schema) => schema.postPk,
  userPk: (schema) => schema.userPk.optional(),
});

export const getLikesSchema = createInsertSchema(likes, {
  postPk: (schema) => schema.postPk.optional(),
  userPk: (schema) => schema.userPk.optional(),
});

export const updateUserSchema = createInsertSchema(users, {
  username: (schema) => schema.username.min(0),
  bio: (schema) => schema.bio.min(0),
  name: (schema) => schema.name.min(0),
  location: (schema) => schema.location.min(0),
  email: (schema) => schema.email.optional(),
  id: (schema) => schema.id.optional(),
  image: (schema) => schema.image.optional(),
});

export type TagType = typeof tags.$inferSelect;
