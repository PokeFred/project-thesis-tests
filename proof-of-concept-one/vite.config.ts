/// <reference types="vitest/config" />
import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"

const config: CommonServerOptions = {
    host: "127.0.0.1",
    port: 3000,
    strictPort: true
}

export default defineConfig({
    server: config,
    preview: config,
    plugins: [sveltekit(), enhancedImages()],
    test: {
        environment: "jsdom",
        include: [
            "./src/**/*.{test,spec}.{js,ts}",
            "./tests/**/*.{test,spec}.{js,ts}"
        ]
    }
})
