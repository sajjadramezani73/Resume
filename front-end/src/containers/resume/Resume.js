import Title from "@/components/titlePage/Title"
import useTransition from "@/hooks/useTransition"
import { getEducations, getExperiences } from "@/services/queries";
import LoadSvgIcon from "@/utils/LoadSvgIcon";
import { useEffect, useState } from "react";
import ExperienceItem from '@/components/experienceItem/ExperienceItem'
import ExperienceItemShimmer from '@/components/experienceItem/ExperienceItemShimmer'
import EducationItem from "@/components/educationItem/EducationItem";
import EducationItemShimmer from "@/components/educationItem/EducationItemShimmer";

const Resume = () => {

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
                console.log(res)
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
                    <div className="flex items-center border-b border-center-image pb-7 mb-7">
                        <LoadSvgIcon name="bag" size={32} weight={2} color="var(--color-primary)" />
                        <p className="text-base font-bold text-captionDark ms-2 capitalize">{t.experience}</p>
                    </div>
                    <div className="">
                        {loadingExp ? (
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
                    <div className="flex items-center border-b border-center-image pb-7 mb-7 mt-10">
                        <LoadSvgIcon name="education" size={32} weight={2} color="var(--color-primary)" />
                        <p className="text-base font-bold text-captionDark ms-2 capitalize">{t.education}</p>
                    </div>
                    <div className="">
                        {loadingEdu ? (
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