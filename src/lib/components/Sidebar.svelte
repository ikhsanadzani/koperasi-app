<script lang="ts">
	import { menu } from '$lib/nav';

	let openGroups = $state<Record<string, boolean>>({});
</script>

<nav style="padding: 1rem; background: #eee;">
	{#each menu as item }
		<div>
			<button onclick={() => openGroups[item.label] = !openGroups[item.label]}>
				{item.label}
			</button>

			{#if openGroups[item.label]}
				{#each item.children as child}
					<a href={child.href}>{child.label}</a>
				{/each}
			{/if}
		</div>
	{/each}
</nav>