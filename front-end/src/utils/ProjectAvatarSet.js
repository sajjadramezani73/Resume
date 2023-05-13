import { baseUrl } from "@/constant"

// set Avater user or static avater
export const projectAvatar = (images) => {
    if (images.length > 0) {
        return baseUrl + '/' + images[0].path
    } else {
        return './assets/image/empty.jpg'
    }
}