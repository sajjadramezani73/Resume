import useTransition from "@/hooks/useTransition"
import { useAboutAction } from "@/store/aboutSlice"

const About = () => {
    const { t, locale } = useTransition()

    const { about } = useAboutAction()

    return (
        <>
            <div>{t.about}</div>
        </>
    )
}

export default About