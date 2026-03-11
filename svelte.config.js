import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
		paths: {
			base: dev ? '' : '/alira008.github.io'
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
