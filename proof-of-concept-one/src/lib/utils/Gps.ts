import { browser } from "$app/environment"

type UserLocationData = {
    lat: number,
    lon: number,
    acc: number,
    timestamp: Date
}

type UserLocationErrorCode = "PERMISSION_DENIED" | "POSITION_UNAVAILABLE" | "TIMEOUT" | "BROWSER_UNAVAILABLE" | "UNKNOWN"

type UserLocationError = {
    code: UserLocationErrorCode,
    message: string
}

type UserLocationErrorMap = {
    [K in UserLocationErrorCode]: UserLocationError
}

const ERRORS: UserLocationErrorMap = {
    "PERMISSION_DENIED": { code: "PERMISSION_DENIED", message: "Standortzugriff verweigert." },
    "POSITION_UNAVAILABLE": { code: "POSITION_UNAVAILABLE", message: "Standortinformationen nicht verfügbar." },
    "TIMEOUT": { code: "TIMEOUT", message: "Zeitüberschreitung beim Abrufen des Standorts." },
    "BROWSER_UNAVAILABLE": { code: "BROWSER_UNAVAILABLE", message: "Standortabfrage ist im aktuellen Kontext (kein Browser) nicht möglich." },
    "UNKNOWN": { code: "UNKNOWN", message: "Unbekannter Standortfehler." }
}

function formatData(data: GeolocationPosition): UserLocationData {
    return {
        lat: data.coords.latitude,
        lon: data.coords.longitude,
        acc: data.coords.accuracy,
        timestamp: new Date(data.timestamp)
    } as UserLocationData
}

function formatError(error: GeolocationPositionError): UserLocationError {
    const code: number = error.code

    if (code === 1) return ERRORS["PERMISSION_DENIED"]
    else if (code === 2) return ERRORS["POSITION_UNAVAILABLE"]
    else if (code === 3) return ERRORS["TIMEOUT"]
    else return ERRORS["UNKNOWN"]
}

async function fetchLocation(): Promise<UserLocationData> {
    return new Promise((resolve: (value: UserLocationData) => void, reject: (reason: UserLocationError) => void): void => {
        if (!browser) reject(ERRORS["BROWSER_UNAVAILABLE"])

        navigator.geolocation.getCurrentPosition(
            (data: GeolocationPosition): void => resolve(formatData(data)),
            (error: GeolocationPositionError): void => reject(formatError(error))
        )
    })
}

export { fetchLocation }
export type { UserLocationData, UserLocationError }
