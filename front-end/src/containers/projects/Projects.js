import ProjectItem from '@/components/projectItem/ProjectItem';
import ProjectItemShimmer from '@/components/projectItem/ProjectItemShimmer';
import Title from '@/components/titlePage/Title'
import useTransition from '@/hooks/useTransition'
import { getProjects } from '@/services/queries';
import { useEffect, useState } from 'react';

const Projects = () => {

    const { t, locale } = useTransition()

    const [projects, setProjects] = useState([]);
    const [loadingPrj, setLoadingPrj] = useState(true);

    useEffect(() => {
        getProjects()
            .then(res => {
                setProjects(res?.projects.reverse())
                setLoadingPrj(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingPrj(false)
            })
    }, [locale]);

    return (
        <>
            <div className="h-full flex flex-col">
                <Title>{t.projects}</Title>
                <div className="pt-7 flex-grow overflow-hidden overflow-y-auto no-scroll">
                    {loadingPrj ? (
                        <>
                            <ProjectItemShimmer />
                            <ProjectItemShimmer />
                        </>
                    ) : (
                        <>
                            {projects?.map(item => {
                                return <ProjectItem key={item?._id} item={item} />
                            })}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects