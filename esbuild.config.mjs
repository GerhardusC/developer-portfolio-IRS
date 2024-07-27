import * as esbuild from "esbuild";

await esbuild.build({
	entryPoints: ["index.tsx"],
	bundle: true,
	loader: {
		".png": "file",
		".svg": "file",
	},
	// minify: true,
	outdir: "dist",
});
