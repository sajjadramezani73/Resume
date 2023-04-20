import Sidebar from '@/components/sidebar/Sidebar'
import UserInfo from '@/components/userInfo/UserInfo'
import { getAbout } from '@/services/queries'
import { useAboutAction } from '@/store/aboutSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Layout = ({ children }) => {
    const { locale } = useRouter()
    const { aboutMe, addAboutMe } = useAboutAction()

    console.log(aboutMe)

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

    return (
        <div className="w-full h-full flex justify-center items-center py-[50px] bg-gradient-to-br from-secondary/70 to-primary/70">
            <div className={`container h-full flex gap-x-4 ${locale === 'fa' ? 'rtl' : 'ltr'}`}>
                <div className="w-[72px] min-w-[72px]">
                    <Sidebar />
                </div>
                <div className="flex flex-grow">
                    <div className={`w-4/12 bg-white scale-[1.05] rounded ${locale == 'fa' ? 'shadow-shadowLeft' : 'shadow-shadowRight'}`}>
                        <UserInfo />
                    </div>
                    <div className="w-8/12 bg-white flex-grow rounded-e p-7 ps-10">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout