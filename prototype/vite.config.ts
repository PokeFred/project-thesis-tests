import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"
import tailwindcss from "@tailwindcss/vite"

const config: CommonServerOptions = {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
}

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 3000,
        strictPort: true,
        allowedHosts: ["cedric-paelmke.de"]
    },
    preview: {
        host: "0.0.0.0",
        port: 3000,
        strictPort: true,
        allowedHosts: ["cedric-paelmke.de"]
    },
    plugins: [tailwindcss(), sveltekit(), enhancedImages()]
})
