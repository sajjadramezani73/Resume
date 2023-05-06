import Sidebar from '@/components/sidebar/Sidebar'
import SidebarItems from '@/components/sidebar/components/SidebarItems'
import SwitchLanguage from '@/components/sidebar/components/SwitchLanguage'
import SwitchTheme from '@/components/sidebar/components/SwitchTheme'
import UserInfo from '@/components/userInfo/UserInfo'
import useTransition from '@/hooks/useTransition'
import { getAbout } from '@/services/queries'
import { useAboutAction } from '@/store/aboutSlice'
import { useThemeAction } from '@/store/themeSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Layout = ({ children }) => {
    const router = useRouter()
    const { locale } = useTransition()
    const { theme } = useThemeAction()
    const { addAboutMe } = useAboutAction()

    const [firstLoad, setFirstLoad] = useState(true)


    useEffect(() => {
        if (true) {
            getAbout()
                .then(res => {
                    // console.log(res)
                    addAboutMe(res?.aboutMe)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [locale]);

    // show route selected atrer change route in top veiw device
    useEffect(() => {
        if (!firstLoad) {
            var getMeTo = document.getElementById('info_section')
            getMeTo.scrollIntoView({
                behavisor: 'smooth',
                block: 'start',
                inline: 'start',
            })
        }
        if (firstLoad == true) {
            setFirstLoad(false)
        }
    }, [router])

    return (
        <div className={`${locale === 'fa' ? 'font-iranyekan' : 'font-roboto'} w-full h-full flex justify-center items-center md:py-[50px] bg-gradient-to-br from-secondary/70 to-primary/70 dark:from-[#17171b] dark:to-[#28282f]`}>
            <div className={`md:container w-full h-full flex flex-col md:flex-row md:gap-x-4 ${locale === 'fa' ? 'rtl' : 'ltr'}`}>
                <div className="hidden md:block w-[72px] min-w-[72px]">
                    <Sidebar />
                </div>
                <div className={`flex justify-between items-center px-4 border-b md:hidden h-[58px] min-h-[58px] bg-white dark:bg-bgDark
                ${theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'}`}>
                    <span className='w-20'>
                        <SwitchLanguage />
                    </span>
                    <span>
                        <SwitchTheme />
                    </span>
                </div>
                <div className="flex flex-col md:flex-row flex-grow overflow-hidden md:overflow-visible overflow-y-auto md:overflow-y-visible">
                    <div className={`grow min-h-full md:w-4/12 bg-white dark:bg-bgDark md:scale-[1.05] md:rounded ${locale == 'fa' ? 'shadow-shadowLeft' : 'shadow-shadowRight'}`}>
                        <UserInfo />
                    </div>
                    <div className="md:w-8/12 bg-white dark:bg-bgDark flex-grow rounded-e p-4 md:p-7 md:ps-10" id="info_section">{children}</div>
                </div>
                <div className={`grid grid-cols-3 md:hidden h-16 min-h-[64px] bg-white dark:bg-bgDark border-t`}>
                    <SidebarItems />
                </div>
            </div>
        </div>
    )
}

export default Layout