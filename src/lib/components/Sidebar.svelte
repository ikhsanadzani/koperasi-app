<script lang="ts">
	import { menu } from '$lib/nav';
</script>

<nav style="padding: 1rem; background: #eee;">
	{#each menu as item}
	<div>
		<strong>{item.label}</strong>
		{#each item.children as child}
			<a href={child.href}>{child.label}</a>
		{/each}
	</div>
{/each}
</nav>