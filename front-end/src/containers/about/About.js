import Title from "@/components/titlePage/Title"
import useTransition from "@/hooks/useTransition"
import { useAboutAction } from "@/store/aboutSlice"
import AboutItem from "./components/AboutItem"
import { useThemeAction } from "@/store/themeSlice"

const About = () => {

    const { theme } = useThemeAction()
    const { t } = useTransition()
    const { aboutMe } = useAboutAction()

    return (
        <>
            <div className="h-full">
                <Title>{t.about}</Title>
                <div className="grid grid-cols-2">
                    <div className={`pt-7 border-e pe-6 ${theme === 'dark' ? 'border-vertical-image-dark' : 'border-vertical-image'}`}>
                        <p className="text-base text-caption dark:text-lightCaption font-medium leading-8 capitalize">{aboutMe?.bio}</p>
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