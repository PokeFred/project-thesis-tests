export type Introduction = {
    text: string
    informations: {
        adress: string
        transit: string[]
        coordinates: {
            lat: number,
            lon: number,
            text: string
        }
    }
}
