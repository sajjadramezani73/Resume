import Title from "@/components/titlePage/Title"
import useTransition from "@/hooks/useTransition"
import { getExperiences } from "@/services/queries";
import LoadSvgIcon from "@/utils/LoadSvgIcon";
import { useEffect, useState } from "react";
import ExperienceItem from '@/components/experienceItem/ExperienceItem'
import ExperienceItemShimmer from '@/components/experienceItem/ExperienceItemShimmer'

const Resume = () => {

    const { t, locale } = useTransition()

    const [experiences, setExperiences] = useState([]);
    const [loadingExp, setLoadingExp] = useState(true);

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
    }, [locale]);

    return (
        <>
            <div className="h-full">
                <Title>{t.resume}</Title>
                <div className="pt-7">
                    <div className="flex items-center border-b border-center-image pb-7 mb-7">
                        <LoadSvgIcon name="bag" size={32} weight={2} color="var(--color-primary)" />
                        <p className="text-base font-bold text-captionDark ms-2 capitalize">{t.experience}</p>
                    </div>
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
            </div>
        </>
    )
}

export default Resume