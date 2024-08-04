import * as esbuild from "esbuild";

const ctx = await esbuild.context({
	entryPoints: ["index.tsx"],
	bundle: true,
	loader: {
		".png": "file",
		".svg": "file",
	},
	// minify: true,
	outdir: "dist",
});

let {host, port} = await ctx.serve({servedir: "./dist", host: "127.0.0.1"});
console.log(`${host} listening on port ${port}`)