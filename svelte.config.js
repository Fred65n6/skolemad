import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter()
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};
