<script lang="ts">
	let isOpen = $state(false);
</script>

<button onclick={() => isOpen = !isOpen}>
	Toggle
</button>

{#if isOpen}
	<p>Terbuka</p>
{:else}
	<p>Tertutup</p>
{/if}