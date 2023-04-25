import { useThemeAction } from "@/store/themeSlice"

const AboutItem = ({ title, value }) => {
    const { theme } = useThemeAction()
    return (
        <div className={`flex justify-between items-center border-b pb-3 last:border-0
        ${theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'}`}>
            <p className="text-tiny font-medium text-primary capitalize">{title}</p>
            <p className="text-tiny font-medium text-caption dark:text-lightCaption">{value}</p>
        </div>
    )
}

export default AboutItem