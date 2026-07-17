export const menu = [
	{ label:'Dashboard', href: '/dasboard'},
	{
		label: 'Anggota',
		children: [
			{ label: 'Daftar Anggota', href: '/anggota' },
			{ label: 'Permohonan Anggota', href: '/anggota/permohonan' },
			{ label: 'Permohonan Berhenti', href: '/anggota/permohonan-berhenti' }
		]
	},
	{
		label: 'Simpanan',
		children: [
			{ label: 'Daftar Rekening Simpanan', href: '/simpanan/rekening' },
			{ label: 'Pemindahbukuan', href: '/simpanan/pemindahbukuan' }
		]
	},
	{
		label: 'Pinjaman',
		children: [
			{ label: 'Daftar Pinjaman', href: '/pinjaman' },
			{ label: 'Transaksi Pencairan', href: '/pinjaman/pencairan' },
		]
	}
];