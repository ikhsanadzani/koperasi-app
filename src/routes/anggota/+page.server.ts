import { db } from '$lib/server/db';
import { anggota } from '$lib/server/db/schema';

export const load = async () => {
	const daftarAnggota = await db.select().from(anggota);
	return { daftarAnggota };
};