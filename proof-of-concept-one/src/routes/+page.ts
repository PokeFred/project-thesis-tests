import type { PageLoad } from "./$types"
import { UserLocation, UserLocationError } from "$utils/GPS"

export const load: PageLoad = async (): Promise<{ location: Promise<UserLocation> }> => {
    return {
        location: new Promise(async (resolve: (value: UserLocation) => void, reject: (reason: UserLocationError) => void): Promise<void> => {
            try {
                const response: UserLocation = await UserLocation.fetchLocation()
                resolve(response)
            } catch (error: unknown) {
                reject(error as UserLocationError)
            }
        })
    }
}
