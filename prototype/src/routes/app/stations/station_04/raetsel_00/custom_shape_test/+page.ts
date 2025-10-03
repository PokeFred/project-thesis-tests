import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	// const path = "/custom_shape_test";
	const path = "https://pokefred.github.io/project-thesis-tests/prototype/custom_shape_test";
	const backgroundSrc = "Anziehbild.png";
	return {
		path: path,
		backgroundSrc: backgroundSrc,
		puzzleData: await (await fetch(`${path}/cutouts.json`)).json(),
	}
}