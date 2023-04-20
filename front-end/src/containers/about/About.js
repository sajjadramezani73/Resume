import Title from "@/components/titlePage/Title"
import useTransition from "@/hooks/useTransition"
import { useAboutAction } from "@/store/aboutSlice"
import AboutItem from "./components/AboutItem"

const About = () => {
    const { t } = useTransition()

    const { aboutMe } = useAboutAction()

    return (
        <>
            <div className="h-full">
                <Title>{t.about}</Title>
                <div className="grid grid-cols-2">
                    <div className="pt-7 border-e border-vertical-image pe-6">
                        <p className="text-base text-caption font-medium leading-8 capitalize">{aboutMe?.bio}</p>
                    </div>
                    <div className="pt-7 ps-6 grid gap-y-3">
                        <AboutItem title={t.age} value={aboutMe?.age} />
                        <AboutItem title={t.phone} value={'0' + aboutMe?.phone} />
                        <AboutItem title={t.email} value={aboutMe?.email} />
                        <AboutItem title={t.address} value={aboutMe?.address} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About