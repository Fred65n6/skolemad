const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["apple-icon.svg","apple.png","bestik-icon.svg","bestik.png","bg-green-2.svg","blue-bg.svg","favicon.png","glutenikon.png","glutenikon.svg","green-bg.svg","hero.jpg","logo.png","mad-collage-1.jpg","mad-collage-2.jpg","mad-collage-3.jpg","mad-collage-4.jpg","mad.jpg","madplan.png","mail-icon.svg","mail.png","mælkikon.svg","nødikon.svg","orange-bg.svg.svg","pil-madplan.svg","pil.png","pil.svg","right-arrow.svg","school-icon.svg","skole.png","svelte-welcome.png","svelte-welcome.webp","telefon.png","telephone-icon.svg","users-icon.svg","users.png","vegetarikon.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp"},
	_: {
		entry: {"file":"start-b22a3330.js","js":["start-b22a3330.js","chunks/vendor-d4864bdc.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js'))
		],
		routes: [
			{
				type: 'page',
				id: "Kontooversigt",
				pattern: /^\/Kontooversigt\/?$/,
				names: [],
				types: [],
				path: "/Kontooversigt",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "betaling",
				pattern: /^\/betaling\/?$/,
				names: [],
				types: [],
				path: "/betaling",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "complete",
				pattern: /^\/complete\/?$/,
				names: [],
				types: [],
				path: "/complete",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "Madplan",
				pattern: /^\/Madplan\/?$/,
				names: [],
				types: [],
				path: "/Madplan",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "Footer",
				pattern: /^\/Footer\/?$/,
				names: [],
				types: [],
				path: "/Footer",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "order",
				pattern: /^\/order\/?$/,
				names: [],
				types: [],
				path: "/order",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "Hero",
				pattern: /^\/Hero\/?$/,
				names: [],
				types: [],
				path: "/Hero",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
