<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { right?: boolean; children: Snippet };
	let { right = false, children }: Props = $props();
	let location: string;
	if (right) {
		location = 'right-10';
	} else {
		location = 'left-10';
	}
</script>

<div class={`fixed hidden md:inline-block ${location} bottom-0 w-10 text-slate-400`}>
	<div
		class="flex flex-col items-center after:mt-5 after:block after:h-44 after:w-px after:bg-slate-300"
	>
		{@render children()}
	</div>
</div>
