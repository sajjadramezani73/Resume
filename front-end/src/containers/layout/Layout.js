import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="w-full h-full flex justify-center items-center py-[50px] bg-gradient-to-br from-secondary/70 to-primary/70">
            <div className='container h-full flex gap-x-4'>
                <div className="w-[72px] bg-white rounded">sidebar</div>
                <div className="flex flex-grow">
                    <div className="w-4/12 bg-white shadow-2xl scale-[1.05] rounded">user info</div>
                    <div className="w-8/12 bg-white flex-grow rounded-r pl-10">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout