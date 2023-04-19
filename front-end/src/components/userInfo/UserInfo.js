import { useAboutAction } from '@/store/aboutSlice'
import React from 'react'

const UserInfo = () => {

    const { aboutMe } = useAboutAction()

    return (
        <div className='w-full h-full flex flex-col justify-between items-center pt-20'>
            <div className="text-center">
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden border mx-auto">

                </div>
                <p className='text-[34px] text-captionDark font-medium mt-6'>{aboutMe?.firstName + ' ' + aboutMe?.lastName}</p>
                <p className='text-base text-primary'>{aboutMe?.job}</p>
                <div className="w-full p-3 bg-primary/50 mt-8"></div>
            </div>
        </div>
    )
}

export default UserInfo