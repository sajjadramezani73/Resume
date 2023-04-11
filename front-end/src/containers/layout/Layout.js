import Sidebar from '@/components/sidebar/Sidebar'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="w-full h-full flex justify-center items-center py-[50px] bg-gradient-to-br from-secondary/70 to-primary/70">
            <div className='container h-full flex gap-x-4 rtl'>
                <div className="w-[72px]">
                    <Sidebar />
                </div>
                <div className="flex flex-grow">
                    <div className="w-4/12 bg-white shadow-[-14px_0px_20px_-20px_rgba(0,0,0,0.1)] scale-[1.05] rounded">user info</div>
                    <div className="w-8/12 bg-white flex-grow rounded-r pr-10">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout