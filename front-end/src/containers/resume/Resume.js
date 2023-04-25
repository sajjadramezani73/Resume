import Title from "@/components/titlePage/Title"
import useTransition from "@/hooks/useTransition"
import { getEducations, getExperiences } from "@/services/queries";
import LoadSvgIcon from "@/utils/LoadSvgIcon";
import { useEffect, useState } from "react";
import ExperienceItem from '@/components/experienceItem/ExperienceItem'
import ExperienceItemShimmer from '@/components/experienceItem/ExperienceItemShimmer'
import EducationItem from "@/components/educationItem/EducationItem";
import EducationItemShimmer from "@/components/educationItem/EducationItemShimmer";
import { useThemeAction } from "@/store/themeSlice";

const Resume = () => {

    const { theme } = useThemeAction()
    const { t, locale } = useTransition()

    const [experiences, setExperiences] = useState([]);
    const [loadingExp, setLoadingExp] = useState(true);
    const [educations, setEducations] = useState([]);
    const [loadingEdu, setLoadingEdu] = useState(true);

    useEffect(() => {
        getExperiences()
            .then(res => {
                // console.log(res)
                setExperiences(res?.experiences)
                setLoadingExp(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingExp(false)
            })
        getEducations()
            .then(res => {
                // console.log(res)
                setEducations(res?.educations)
                setLoadingEdu(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingEdu(false)
            })
    }, [locale]);

    return (
        <>
            <div className="h-full flex flex-col">
                <Title>{t.resume}</Title>
                <div className="pt-7 flex-grow overflow-hidden overflow-y-auto no-scroll">
                    <div className={`flex items-center pb-7 mb-7 border-b 
                    ${theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'}`}>
                        <LoadSvgIcon name="bag" size={32} weight={2} color="var(--color-primary)" />
                        <p className="text-base font-bold text-captionDark dark:text-lightCaptionLight ms-2 capitalize">{t.experience}</p>
                    </div>
                    <div className="">
                        {loadingExp || loadingEdu ? (
                            <>
                                <ExperienceItemShimmer />
                                <ExperienceItemShimmer />
                            </>
                        ) : (
                            <>
                                {experiences?.map(item => {
                                    return <ExperienceItem item={item} key={item?._id} />
                                })}
                            </>
                        )}
                    </div>
                    <div className={`flex items-center  pb-7 mb-7 mt-10 border-b
                    ${theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'}`}>
                        <LoadSvgIcon name="education" size={32} weight={2} color="var(--color-primary)" />
                        <p className="text-base font-bold text-captionDark dark:text-lightCaptionLight ms-2 capitalize">{t.education}</p>
                    </div>
                    <div className="">
                        {loadingEdu || loadingExp ? (
                            <>
                                <EducationItemShimmer />
                                <EducationItemShimmer />
                            </>
                        ) : (
                            <>
                                {educations?.map(item => {
                                    return <EducationItem item={item} key={item?._id} />
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume