import useTransition from "@/hooks/useTransition"

const About = () => {
    const { t } = useTransition()
    return (
        <div>{t.about}</div>
    )
}

export default About