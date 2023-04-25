import useTransition from '@/hooks/useTransition'
import { useThemeAction } from '@/store/themeSlice'

const Title = ({ children }) => {
    const { locale } = useTransition()
    const { theme } = useThemeAction()
    return (
        <p className={`pb-7 text-xl font-bold text-captionDark dark:text-lightCaptionLight capitalize relative border-b 
        ${locale == 'fa' ? (theme === 'dark' ? 'border-bottom-image-to-left-dark' : 'border-bottom-image-to-left') :
                (theme === 'dark' ? 'border-bottom-image-to-right-dark' : 'border-bottom-image-to-right')} `}>
            {children}
            <span className="absolute top-1 -start-2.5 w-7 h-7 rounded-full bg-primary/5 dark:bg-primary/10"></span>
        </p>
    )
}

export default Title