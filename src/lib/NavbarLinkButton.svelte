<script lang="ts">
	type Props = { name: string; itemNumber: string; isMobileButton?: boolean };
	const { name, itemNumber, isMobileButton = false }: Props = $props();
	const styling = isMobileButton
		? `flex flex-col justify-center items-center p-3 w-full before:content-['${itemNumber}.'] before:text-green-300 before:text-xs`
		: `flex items-center p-3 before:content-['${itemNumber}.'] hover:text-green-300 before:text-green-300 before:text-xs before:mr-2`;
</script>

<a href={`#${name}`} class={styling}>
	{name}
</a>
