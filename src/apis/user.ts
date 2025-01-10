import { z } from "zod"
import { request } from "./request"

const UserSchema = z.object({
    id: z.string(),
})
export const getUserInfo = async () => {
    return request(`https://api.github.com/user/random-api-sure-error`, {}, UserSchema)
}