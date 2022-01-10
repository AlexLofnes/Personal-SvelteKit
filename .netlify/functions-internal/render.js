const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["aboutIcon.svg","favicon.png"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-34aad9db.js","js":["start-34aad9db.js","chunks/vendor-cbdddae2.js"],"css":["assets/start-d5b4de3e.css","assets/vendor-86f8c920.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Pathfind\/?$/,
				params: null,
				path: "/Pathfind",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Fast\/?$/,
				params: null,
				path: "/Fast",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Slow\/?$/,
				params: null,
				path: "/Slow",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Sort\/?$/,
				params: null,
				path: "/Sort",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Todo\/?$/,
				params: null,
				path: "/Todo",
				a: [0,7],
				b: [1]
			}
		]
	}
});
