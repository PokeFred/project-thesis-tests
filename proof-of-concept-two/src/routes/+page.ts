import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {
	return {
		// cutoutData: await (await fetch("./images/cutouts.json")).json()
		cutoutData: await (await fetch("https://pokefred.github.io/project-thesis-tests/proof-concept-two/images/cutouts.json")).json()
	};
};