<script lang="ts">
	let { form } = $props();
</script>

<div class="max-w-md p-6">
	<h1 class="mb-4 text-xl font-semibold">Permohonan Anggota</h1>

	{#if form?.success}
		<p class="mb-4 rounded bg-green-100 px-3 py-2 text-green-700">
			Berhasil mendaftar!
		</p>
	{/if}

	<form method="POST" class="flex flex-col gap-4">
		<div>
			<label class="mb-1 block text-sm font-medium">Nama</label>
			<input
				type="text"
				name="nama"
				class="w-full rounded border px-3 py-2 focus:border-emerald-500 focus:outline-none"
			/>
			{#if form?.errors?.nama}
				<p class="mt-1 text-sm text-red-600">{form.errors.nama[0]}</p>
			{/if}
		</div>

		<div>
			<label class="mb-1 block text-sm font-medium">Wilayah</label>
			<input
				type="text"
				name="wilayah"
				class="w-full rounded border px-3 py-2 focus:border-emerald-500 focus:outline-none"
			/>
			{#if form?.errors?.wilayah}
				<p class="mt-1 text-sm text-red-600">{form.errors.wilayah[0]}</p>
			{/if}
		</div>

		<button
			type="submit"
			class="rounded bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800"
		>
			Daftar
		</button>
	</form>
</div>