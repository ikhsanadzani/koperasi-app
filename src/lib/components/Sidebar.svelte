<script lang="ts">
	const menu = [
		{ label: 'Dashboard', href: '/dashboard' },
		{ label: 'Anggota', href: '/anggota' }
	];
</script>

<nav style="padding: 1rem; background: #eee;">
	{#each menu as item}
		<a href={item.href}>{item.label}</a>
	{/each}
</nav>