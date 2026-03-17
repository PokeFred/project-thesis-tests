import { goto } from "$app/navigation"
import { resolve } from "$app/paths"

const BASE_URL: string = resolve("/")
const PREFIX: string = "/einkaufsspuren/#"

export function getBasePath(): string {
    return `${PREFIX}`
}

export function asset(path: string): string {
    return `${PREFIX}/data${path}`
}

export async function sendTo(path: string): Promise<void> {
    await goto(`${PREFIX}${path}`)
}

export function navigateTo(path: string): void {
    window.location.href = `https://konsum-mkk.de${PREFIX}${path}`
}
