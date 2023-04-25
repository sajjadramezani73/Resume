import { useThemeAction } from '@/store/themeSlice'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SidebarItem = ({ item, isLink = true }) => {

    const router = useRouter()
    const { theme } = useThemeAction()

    return (
        <>
            {isLink ? (
                <Link href={item.href} >
                    <span className={`w-full flex flex-col items-center py-3 border-b 
                    ${theme === 'dark' ? "border-center-image-dark" : "border-center-image"}`}>
                        <LoadSvgIcon
                            name={item.icon}
                            size={20}
                            color={router.pathname === item.href ? 'var(--color-primary)' : theme === 'dark' ? 'var(--color-lightCaptionLight)' : 'var(--color-captionDark)'}
                            weight={1.5}
                        />
                        <p className={`text-xxs font-medium mt-1 ${router.pathname === item.href ? 'text-primary' : 'text-captionDark dark:text-lightCaptionLight'}`}>
                            {item.title}
                        </p>
                    </span>
                </Link >
            ) : (
                <span className="w-full flex flex-col items-center py-5">
                    <LoadSvgIcon
                        name={item.icon}
                        size={20}
                        color={router.pathname === item.href ? 'var(--color-primary)' : 'var(--color-captionDark)'}
                        weight={1.5}
                    />
                </span>
            )}
        </>
    )
}

export default SidebarItem