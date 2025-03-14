import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const todoTable = sqliteTable("todos", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title").notNull(),
	completed: integer("completed", {
		mode: "boolean",
	}).default(false),
})
