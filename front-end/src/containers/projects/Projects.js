import Title from '@/components/titlePage/Title'
import useTransition from '@/hooks/useTransition'

const Projects = () => {

    const { t } = useTransition()

    return (
        <>
            <div className="h-full">
                <Title>{t.projects}</Title>
            </div>
        </>
    )
}

export default Projects