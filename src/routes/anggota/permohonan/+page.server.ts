// src/routes/anggota/permohonan/+page.server.ts
import { db } from '$lib/server/db';
import { anggota } from '$lib/server/db/schema';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

const schema = z.object({
	nama: z.string().min(3, 'Nama minimal 3 karakter'),
	wilayah: z.string().min(1, 'Wilayah wajib diisi')
});

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const nama = formData.get('nama');
		const wilayah = formData.get('wilayah');

		const result = schema.safeParse({ nama, wilayah });

		if (!result.success) {
			return fail(400, { errors: result.error.flatten().fieldErrors });
		}

		await db.insert(anggota).values(result.data);

		return { success: true };
	}
};