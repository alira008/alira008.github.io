<script lang="ts">
	import NavbarLinkButton from '$lib/NavbarLinkButton.svelte';

	let buttonClicked = $state(false);
	let mobileLeft = $state('translate-x-full');
	function handleClick() {
		if (buttonClicked) {
			mobileLeft = 'translate-x-0';
		} else {
			mobileLeft = 'translate-x-full';
		}
        buttonClicked = !buttonClicked
	}
</script>

<header
	class="bg-navy-300/95 fixed z-40 flex w-full items-center justify-between px-12 py-4 font-mono text-slate-300"
>
	<div class="text-4xl font-bold text-green-300">
		<a href="#Home">AL</a>
	</div>
	<ol class="hidden md:flex md:w-4/6 md:justify-between md:text-sm lg:w-5/12">
		<li>
			<NavbarLinkButton name="About" itemNumber="01" />
		</li>
		<li>
			<NavbarLinkButton name="Skills" itemNumber="02" />
		</li>
		<li>
			<NavbarLinkButton name="Jobs" itemNumber="03" />
		</li>
		<li>
			<NavbarLinkButton name="Projects" itemNumber="04" />
		</li>
		<li>
			<NavbarLinkButton name="Contact" itemNumber="05" />
		</li>
		<li>
			<a
				href="/assets/resume/Resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center p-3 text-green-300"
			>
				Resume
			</a>
		</li>
	</ol>
	<div class="flex flex-col items-center md:hidden">
		<button class="z-50 p-2 outline-none" onclick={handleClick}>
			{#if buttonClicked}
				<i class="fas fa-times fa-lg text-green-300" />
			{:else}
				<i class="fas fa-bars fa-lg text-green-300" />
			{/if}
		</button>
		<div
			class={'bg-navy-200/30 fixed inset-y-0 left-0 flex h-screen w-screen justify-end text-xl font-medium transition md:hidden ' +
				mobileLeft}
		>
			<ol class="bg-navy-200 flex h-full w-9/12 flex-col items-center gap-y-3 py-16 sm:w-8/12">
				<li class="w-full">
					<NavbarLinkButton name="About" itemNumber="01" isMobileButton />
				</li>
				<li class="w-full">
					<NavbarLinkButton name="Skills" itemNumber="02" isMobileButton />
				</li>
				<li class="w-full">
					<NavbarLinkButton name="Jobs" itemNumber="03" isMobileButton />
				</li>
				<li class="w-full">
					<NavbarLinkButton name="Projects" itemNumber="04" isMobileButton />
				</li>
				<li class="w-full">
					<NavbarLinkButton name="Contact" itemNumber="05" isMobileButton />
				</li>
				<li class="w-full">
					<a
						href="/assets/resume/Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block w-full p-3 text-center text-green-300"
					>
						Resume
					</a>
				</li>
			</ol>
		</div>
	</div>
</header>
