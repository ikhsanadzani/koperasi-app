import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const anggota = pgTable('anggota', {
	id: serial('id').primaryKey(),
	nama: varchar('nama', { length: 128 }).notNull(),
	wilayah: varchar('wilayah', { length: 128 })
});