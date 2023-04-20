import Title from "@/components/titlePage/Title"
import useTransition from "@/hooks/useTransition"

const Resume = () => {

    const { t } = useTransition()

    return (
        <>
            <div className="h-full">
                <Title>{t.resume}</Title>
            </div>
        </>
    )
}

export default Resume