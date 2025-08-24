import { browser } from "$app/environment"

export class UserLocation {
    private lat: number
    private lon: number
    private acc: number
    private date: Date

    private constructor(lat: number, lon: number, acc: number, timestamp: number) {
        this.lat = lat
        this.lon = lon
        this.acc = acc
        this.date = new Date(timestamp)
    }

    public getLat(): number {
        return this.lat
    }

    public getLon(): number {
        return this.lon
    }

    public getAcc(): number {
        return this.acc
    }

    public getDate(): Date {
        return this.date
    }

    public static async fetchLocation(): Promise<UserLocation> {
        const data: GeolocationPosition = await InternalUserLocation.fetchLocation()
        const coords: GeolocationCoordinates = data.coords

        return new UserLocation(coords.latitude, coords.longitude, coords.accuracy, data.timestamp)
    }
}

class InternalUserLocation {
    public static async fetchLocation(): Promise<GeolocationPosition> {
        if (!browser) throw new UserLocationError("BROWSER_UNAVAILABLE", "Standortabfrage ist im aktuellen Kontext (kein Browser) nicht möglich.")

        try {
            const data: GeolocationPosition = await this.fetchLocationWrapper()
            return data
        } catch (error: unknown) {
            const code: number = (error as GeolocationPositionError).code

            switch (code) {
                case 1: throw new UserLocationError("PERMISSION_DENIED", "Standortzugriff verweigert.")
                case 2: throw new UserLocationError("POSITION_UNAVAILABLE", "Standortinformationen nicht verfügbar.")
                case 3: throw new UserLocationError("TIMEOUT", "Zeitüberschreitung beim Abrufen des Standorts.")
                default: throw new UserLocationError("UNKNOWN", "Unbekannter Standortfehler");
            }
        }
    }

    private static fetchLocationWrapper(): Promise<GeolocationPosition> {
        return new Promise((resolve: (value: GeolocationPosition) => void, reject: (reason: GeolocationPositionError) => void) => {
            navigator.geolocation.getCurrentPosition(
                (data: GeolocationPosition): void => resolve(data),
                (error: GeolocationPositionError): void => reject(error)
            )
        })
    }
}

type UserLocationErrorCode = "PERMISSION_DENIED" | "POSITION_UNAVAILABLE" | "TIMEOUT" | "BROWSER_UNAVAILABLE" | "UNKNOWN"
export class UserLocationError extends Error {
    private code: UserLocationErrorCode

    public constructor(code: UserLocationErrorCode, message: string) {
        super(message)
        this.code = code
    }

    public getCode(): UserLocationErrorCode {
        return this.code
    }

    public getMessage(): string {
        return this.message
    }
}
