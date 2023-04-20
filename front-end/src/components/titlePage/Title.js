import useTransition from '@/hooks/useTransition'

const Title = ({ children }) => {
    const { locale } = useTransition()
    return (
        <p className={`pb-7 text-xl font-bold text-captionDark capitalize relative border-b ${locale == 'fa' ? 'border-bottom-image-to-left' : 'border-bottom-image-to-right'} `}>
            {children}
            <span className="absolute top-1 -start-2.5 w-7 h-7 rounded-full bg-primary/5"></span>
        </p>
    )
}

export default Title