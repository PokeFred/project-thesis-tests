export function formatTimestamp(timestamp: Date): string {
    const year: string = timestamp.getFullYear().toString()
    const month: string = timestamp.getMonth().toString().padStart(2, "0")
    const day: string = timestamp.getDate().toString().padStart(2, "0")

    const hours: string = timestamp.getHours().toString().padStart(2, "0")
    const minutes: string = timestamp.getMinutes().toString().padStart(2, "0")
    const seconds: string = timestamp.getSeconds().toString().padStart(2, "0")

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
