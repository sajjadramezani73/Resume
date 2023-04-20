import { baseUrl } from "@/constant"

// set Avater user or static avater
export const avatar = (avatar) => {
    if (avatar !== '') {
        return baseUrl + '/' + avatar
    } else {
        return './assets/image/man.svg'
    }
}