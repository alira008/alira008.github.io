<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Card from '$lib/Card.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
    import twitterCloneImageSrc from '$lib/assets/twitter-clone.png'
    import weatherAppImageSrc from '$lib/assets/WeatherApp.png'
    import terminalImageSrc from '$lib/assets/terminal.jpg'
    import resumeSrc from '$lib/assets/resume/Resume.pdf'
    import meImageSrc from '$lib/assets/Me.jpg'


	const TwitterCloneContent = {
		title: 'Twitter Clone',
		description:
			'A web application that imitates Twitter. Users can create accounts, follow other users, and post content on their profile.',
		stacks: ['React', 'Express', 'Styled Components', 'MySQL', 'Typescript'],
		link: 'https://github.com/alira008/TwitterClone',
		image: twitterCloneImageSrc
	};

	const WeatherAppContent = {
		title: 'Weather Web App',
		description:
			'Shows weather for any city the user searches for. I used Nodejs and JSON server to test API calls on my computer before using a production.',
		stacks: ['Angular', 'Typescript'],
		link: 'https://github.com/alira008/WeatherWebApp',
		image: weatherAppImageSrc
	};

	const ShellProgramContent = {
		title: 'My Shell Program',
		description:
			'Shell program similar to Bash and Zsh. Made using C++ and composite design patterns.',
		stacks: ['C++', 'CMake', 'Composite Design Patterns'],
		link: 'https://github.com/alira008/ShellProgramV2',
		image: terminalImageSrc
	};
</script>

<Navbar />
<Sidebar>
	<ul>
		<li>
			<a
				href="https://github.com/alira008"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block p-3 transition-transform hover:-translate-y-1 hover:text-green-300"
			>
				<i class="fab fa-github fa-lg" />
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/ariel-lira-2456a71a3/"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block p-3 transition-transform hover:-translate-y-1 hover:text-green-300"
			>
				<i class="fab fa-linkedin-in fa-lg" />
			</a>
		</li>
	</ul>
</Sidebar>
<Sidebar right>
	<a
		href="mailto:ariellira.al@gmail.com"
		class="vertical-rl inline-block p-3 font-mono text-sm font-light transition-transform hover:-translate-y-1 hover:text-green-300"
	>
		ariellira.al@gmail.com
	</a>
</Sidebar>
<main class="w-full px-8 font-serif text-sm text-slate-400 md:text-base lg:px-40">
	<section id="Home" class="mx-auto flex min-h-screen max-w-xl flex-col lg:max-w-5xl">
		<div class="mt-36 mb-4 md:mt-80 lg:mt-60">
			<h1 class="font-sans text-sm text-slate-300 md:text-lg lg:text-xl">Hi, my name is</h1>
		</div>
		<div class="mb-2 md:mb-4">
			<h2 class="font-sans text-5xl font-bold text-green-300 md:text-6xl lg:text-8xl">
				Ariel Lira.
			</h2>
		</div>
		<div class="mb-5 md:mb-8">
			<h3 class="font-sans text-3xl font-bold md:text-4xl">
				I love web development and making software.
			</h3>
		</div>
		<div class="mb-14">
			<p>
				I'm a computer engineer and a highly capable full stack developer. I have a big interest in
				programming and love to look at all things programming!
			</p>
		</div>
		<div>
			<a
				href={resumeSrc}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:bg-opacity-5 inline-block rounded border-2 border-green-300 p-4 text-green-300 hover:bg-green-300"
			>
				Checkout my resume!
			</a>
		</div>
	</section>
	<section id="About" class="mx-auto flex max-w-xl flex-col py-14 lg:max-w-4xl lg:py-28">
		<h2
			class="after:bg-navy-100 mt-2 mb-10 flex items-center font-sans text-2xl font-bold text-slate-200 before:mr-2 before:font-mono before:text-xl before:font-light before:text-green-300 before:content-['01.'] after:ml-2 after:h-px after:w-32 md:after:ml-3 md:after:w-64 lg:text-4xl lg:after:ml-5 lg:after:w-72"
		>
			About Me
		</h2>
		<div class="grid grid-cols-1 gap-6 gap-x-0 lg:grid-cols-3 lg:gap-x-12">
			<div class="col-span-2">
				<div class="flex flex-col gap-4">
					<p>
						I am graduate from the University of California, Riverside with a B.S. in Computer
						Engineering. I am a highly capable, full-stack developer. I also have a passionate
						interest in data engineering.
					</p>
					<p>
						I have a real passion for software engineering. Diving into the nitty-gritty of
						different programming languages such as React, Python, Rust, and C++ is what I live for.
						You'll often find me immersing myself in coding videos and articles, always on the hunt
						for new concepts and improved techniques. To me, this isn't just a hobby, it's a
						continuous journey of learning and discovery in this dynamic field of technology.
					</p>
					<p>
						On my free time, I love watching everything Star Wars, Marvel, Lord of the Rings, Harry
						Potter, and DC Comics related materials. My favorite movies are Lord of the Rings:
						Return of the King and Star Wars Episode III: Revenge of the Sith. I also love to play
						video games like League of Legends with my high school friends. Catch me on the Rift!
					</p>
				</div>
			</div>
			<div
				class="relative mt-6 h-64 w-64 justify-self-center before:absolute before:-top-5 before:-left-5 before:-z-10 before:block before:h-64 before:w-64 before:border-2 before:border-green-300 after:absolute after:top-5 after:left-5 after:-z-10 after:block after:h-64 after:w-64 after:border-2 after:border-green-300 lg:mt-0 lg:justify-self-auto"
			>
				<div class="h-full w-full overflow-hidden">
					<img src={meImageSrc} alt="Ariel Lira" />
				</div>
			</div>
		</div>
	</section>
	<section id="Skills" class="mx-auto flex max-w-xl flex-col py-14 lg:max-w-4xl lg:py-28">
		<h2
			class="after:bg-navy-100 mt-2 mb-10 flex items-center font-sans text-2xl font-bold text-slate-200 before:mr-2 before:font-mono before:text-xl before:font-light before:text-green-300 before:content-['02.'] after:ml-2 after:h-px after:w-20 md:after:ml-3 md:after:w-64 lg:text-4xl lg:after:ml-5 lg:after:w-72"
		>
			Tech Experience
		</h2>
		<div class="col-span-3">
			<div class="grid-col-2 mt-4 grid gap-6 lg:grid-cols-3">
				<div>
					<h2 class="mb-1 font-sans text-xl text-slate-300">Web Development</h2>
					<ul class="grid grid-cols-2 gap-x-4 gap-y-1">
						<li>React</li>
						<li>Angular</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Tailwind CSS</li>
						<li>Bootstrap</li>
						<li>Styled Components</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-1 font-sans text-xl text-slate-300">Server Side Development</h2>
					<ul class="grid grid-cols-1 gap-x-4 gap-y-1">
						<li>NodeJs</li>
						<li>ASP.NET MVC</li>
						<li>ASP.NET Web API</li>
						<li>Microsoft SQL Server</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-1 font-sans text-xl text-slate-300">Programming Languages</h2>
					<ul class="grid grid-cols-1 gap-x-4 gap-y-1">
						<li>C++</li>
						<li>C#</li>
						<li>Python</li>
						<li>Javascript</li>
						<li>Rust</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-1 font-sans text-xl text-slate-300">Tools</h2>
					<ul class="grid grid-cols-1 gap-x-4 gap-y-1">
						<li>Git</li>
						<li>Bash</li>
						<li>Vim</li>
						<li>Jupyter Notebooks</li>
					</ul>
				</div>
				<div class="col-span-2">
					<h2 class="mb-1 font-sans text-xl text-slate-300">Related Skills</h2>
					<ul class="grid grid-cols-1 gap-y-1">
						<li>Multi-threaded Programming</li>
						<li>Computer Networks</li>
						<li>Data Structures</li>
						<li>Data Pipelines</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section id="Jobs" class="mx-auto flex max-w-xl flex-col py-14 lg:max-w-4xl lg:py-28">
		<h2
			class="after:bg-navy-100 mt-2 mb-10 flex items-center font-sans text-2xl font-bold text-slate-200 before:mr-2 before:font-mono before:text-xl before:font-light before:text-green-300 before:content-['03.'] after:ml-2 after:h-px after:w-8 md:after:ml-3 md:after:w-64 lg:text-4xl lg:after:ml-5 lg:after:w-1/2"
		>
			Jobs
		</h2>
		<p class="mb-6 text-lg text-slate-300">HBH Unlimited</p>
		<p class="mb-4 text-slate-300">2021 - Current</p>
		<p class="mb-4">
			Connected third party APIs like TD Ameritrade and E*Trade to send trades and receive real time
			data. I used C#, Rust, and multi-threaded principles to make sure we were receiving and
			processing data within milliseconds.
		</p>
		<p class="mb-4">
			Setup Microsoft SQL Server for processing and storing thousands of data points while making
			sure insertions and retrievals were done with very small latency. I had to keep in mind when
			to use non-clustered and clustered indexes when shaping tables.
		</p>
		<p class="mb-4">
			Built a company web application for managing trades we were making using .NET 6 for creating
			an API for the React front-end to connect to.
		</p>
		<p>
			Cleaned and processed thousands of data in order to make statistical analysis on stocks using
			SQL, Python, and Rust. Using this processed data, I generated excel sheets so that the
			stakeholder could clearly see how stocks were changing throughout the day.
		</p>
	</section>
	<section id="Projects" class="mx-auto flex max-w-xl flex-col py-14 lg:max-w-4xl lg:py-28">
		<h2
			class="after:bg-navy-100 mt-2 mb-10 flex items-center font-sans text-2xl font-bold text-slate-200 before:mr-2 before:font-mono before:text-xl before:font-light before:text-green-300 before:content-['04.'] after:ml-2 after:h-px after:w-8 md:after:ml-3 md:after:w-64 lg:text-4xl lg:after:ml-5 lg:after:w-72"
		>
			Projects I Have Made
		</h2>
		<ul>
			<li class="mb-24 grid grid-cols-1 md:grid-cols-11">
				<Card {...TwitterCloneContent} />
			</li>
			<li class="mb-24 grid grid-cols-1 md:grid-cols-11">
				<Card {...WeatherAppContent} variant='right' />
			</li>
			<li class="mb-24 grid grid-cols-1 md:grid-cols-11">
				<Card {...ShellProgramContent} />
			</li>
		</ul>
	</section>
	<section id="Contact" class="mx-auto flex max-w-4xl flex-col items-center py-14 lg:py-28">
		<h2
			class="mt-2 mb-10 flex items-center self-start font-sans text-4xl text-slate-200 before:bottom-1 before:mr-2 before:font-mono before:text-xl before:font-light before:text-green-300 before:content-['05.'] md:self-auto"
		>
			Get In Touch
		</h2>
		<p class="mb-12">Would you like to know more about me or just want to say hello?</p>
		<a
			class="inline-block rounded border-2 border-green-300 p-3 text-green-300"
			href="mailto:ariellira.al@gmail.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			Say Hello
		</a>
	</section>
	<section class="mx-auto flex max-w-4xl flex-col items-center pt-14 lg:pt-28">
		<p class="mb-6">
			This site's design takes inspiration from{' '}
			<a
				href="https://brittanychiang.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-green-300"
			>
				brittanychiang
			</a>
		</p>
	</section>
</main>
