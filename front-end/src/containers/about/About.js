import useTransition from "@/hooks/useTransition"
import { useUserAction } from "@/store/userSlice"

const About = () => {
    const { t, locale } = useTransition()

    const { user } = useUserAction()

    return (
        <>
            <div>{t.about}</div>
        </>
    )
}

export default About