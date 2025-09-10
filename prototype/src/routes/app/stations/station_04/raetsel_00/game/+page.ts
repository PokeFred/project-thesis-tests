import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	// const path = "/Puzzle";
	const path = "https://pokefred.github.io/project-thesis-tests/prototype/Puzzle";
	const backgroundSrc = "Image.png";
	return {
		path: path,
		backgroundSrc: backgroundSrc,
		cutoutData: await (await fetch(`${path}/cutouts.json`)).json(),
	}
}