<script lang="ts">
	let { data } = $props();
</script>

<h1>Daftar Anggota</h1>

<ul>
	{#each data.daftarAnggota as anggota}
		<li>{anggota.nama} — {anggota.wilayah}</li>
	{/each}
</ul>