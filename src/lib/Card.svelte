<script lang="ts">
	type Props = {
		title: string;
		description: string;
		link: string;
		image: string;
		stacks: string[];
		variant?: 'left' | 'right';
	};
	let { title, description, link, image, stacks, variant = 'left' }: Props = $props();
	const first = 'col-start-1 md:col-start-1 lg:col-start-1'
	const second = 'col-end-2 md:col-end-12 lg:col-end-12'
	const textLeft = 'md:text-left'
	const textRight = 'md:text-right'
	const justifyStart = 'md:justify-start'
	const justifyEnd = 'md:justify-end'
	let contentAlign: string;
	let imageAlign: string;
	let textAlign: string;
	let justify: string;
	if (variant === 'right') {
		contentAlign = first;
		imageAlign = second;
		textAlign = textLeft;
		justify = justifyStart;
	} else {
		contentAlign = second;
		imageAlign = first;
		textAlign = textRight;
		justify = justifyEnd;
	}
</script>

<div
	class={`bg-navy-200/60 z-20 col-span-1 row-span-full flex flex-col justify-center p-6 font-serif md:z-auto md:col-span-6 md:bg-transparent md:p-0 lg:col-span-5 ${contentAlign} ${textAlign}`}
>
	<h3 class="mb-4 font-sans text-xl text-slate-300 md:z-20">
		{title}
	</h3>
	<div
		class="md:bg-navy-200 md:shadow-navy-400 mb-6 md:relative md:z-20 md:rounded md:p-6 md:shadow"
	>
		<p>{description}</p>
	</div>
	<ul class={`relative mb-4 flex flex-wrap gap-x-4 gap-y-2 md:z-20 md:text-sm ${justify}`}>
		{#each stacks as stack}
			<li class="bg-navy-200 rounded-full px-3 py-1">{stack}</li>
		{/each}
	</ul>
	<div>
		<a href={link} target="_blank" rel="noopener noreferrer" class={`flex ${justify}`}>
			<i class="bg-navy-200 fab fa-github fa-lg rounded-full px-3 py-2 hover:text-green-300"></i>
		</a>
	</div>
</div>
<div class={`col-span-1 row-span-full h-full md:col-span-6 lg:col-span-7 ${imageAlign}`}>
	<a
		href={link}
		target="_blank"
		rel="noopener noreferrer"
		class="shadow-navy-400 relative inline-block h-full shadow-2xl before:absolute before:h-full before:w-full before:rounded before:bg-teal-800 before:opacity-70 before:transition-opacity hover:before:opacity-0"
	>
		<img src={image} alt="" class="h-full w-full rounded object-cover" />
	</a>
</div>
