import { db } from "$lib/server/db";
import { anggota } from "$lib/server/db/schema";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const nama = formData.get('nama');
        const wilayah = formData.get('wilayah');

        await db.insert(anggota).values({
            nama: nama as string.
            
        });
    }
}; 