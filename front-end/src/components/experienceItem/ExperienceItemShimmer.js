
const experienceItemShimmer = () => {
    return (
        <div className='w-full flex group'>
            <div className="w-44 min-w-[176px] text-end">
                <div className="flex justify-end">
                    <div className="w-16 h-5 rounded-sm bg-gray-100 animate-pulse"></div>
                    <p className='text-captionLight px-1'>-</p>
                    <div className="w-16 h-5 rounded-sm bg-gray-100 animate-pulse"></div>
                </div>
                <div className="w-16 h-5 rounded-sm bg-gray-100 animate-pulse pt-0.5 ms-auto"></div>
            </div>
            <div className="border-r relative mx-6">
                <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white rounded-full border-2 border-gray-300 ring-[5px] ring-gray-100 animate-pulse"></span>
            </div>
            <div className="pb-7 group-last:pb-0 w-full">
                <div className="w-36 h-5 rounded-sm bg-gray-100 animate-pulse"></div>
                <div className="w-full h-5 rounded-sm bg-gray-100 animate-pulse mt-2"></div>
                <div className="w-1/2 h-5 rounded-sm bg-gray-100 animate-pulse mt-2"></div>
            </div>
        </div>
    )
}

export default experienceItemShimmer