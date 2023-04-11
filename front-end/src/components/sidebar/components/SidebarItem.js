import LoadSvgIcon from '@/utils/LoadSvgIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SidebarItem = ({ item, isLink = true }) => {

    const router = useRouter()
    console.log(router)

    return (
        <>
            {isLink ? (
                <Link href={item.href} >
                    <span className="w-full flex flex-col items-center py-3 border-b">
                        <LoadSvgIcon
                            name={item.icon}
                            size={20}
                            color={router.pathname === item.href ? 'var(--color-primary)' : 'var(--color-captionDark)'}
                            weight={1.5}
                        />
                        <p className={`text-xxs font-medium mt-1 ${router.pathname === item.href ? 'text-primary' : 'text-captionDark'}`}>{item.title}</p>
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