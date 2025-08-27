import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
	// const path = "/images";
	const path = "https://pokefred.github.io/project-thesis-tests/proof-concept-two/images";
	const backgroundSrc = "Image.png";
	return {
		path: path,
		backgroundSrc: backgroundSrc,
		cutoutData: await (await fetch(`${path}/cutouts.json`)).json(),
	}
}