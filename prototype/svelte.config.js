import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        router: { type: "hash" },
        paths: { base: "" },
        env: { publicPrefix: "PUBLIC_", privatePrefix: "PRIVATE_" },
        alias: {
            $config: "./src/lib/config",
            $components: "./src/lib/components",
            $utils: "./src/lib/utils",
            $images: "./src/lib/images",
            $stores: "./src/lib/stores",
            $types: "./src/lib/types"
        }
    }
};

export default config;
