import Title from "@/components/titlePage/Title"
import useTransition from "@/hooks/useTransition"
import { useAboutAction } from "@/store/aboutSlice"

const About = () => {
    const { t } = useTransition()

    const { about } = useAboutAction()

    return (
        <>
            <div className="h-full">
                <Title>{t.about}</Title>
            </div>
        </>
    )
}

export default About