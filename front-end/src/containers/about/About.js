import useTransition from "@/hooks/useTransition"
import { useUserAction } from "@/store/userSlice"

const About = () => {
    const { t } = useTransition()

    const { user } = useUserAction()
    console.log(user)

    return (
        <div>{t.about}</div>
    )
}

export default About