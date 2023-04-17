import Sidebar from '@/components/sidebar/Sidebar'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const { locale } = useRouter()

    return (
        <div className="w-full h-full flex justify-center items-center py-[50px] bg-gradient-to-br from-secondary/70 to-primary/70">
            <div className={`container h-full flex gap-x-4 ${locale === 'fa' ? 'rtl' : 'ltr'}`}>
                <div className="w-[72px]">
                    <Sidebar />
                </div>
                <div className="flex flex-grow">
                    <div className="w-4/12 bg-white shadow-[-14px_0px_20px_-20px_rgba(0,0,0,0.1)] scale-[1.05] rounded">user info</div>
                    <div className="w-8/12 bg-white flex-grow rounded-e ps-10">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout