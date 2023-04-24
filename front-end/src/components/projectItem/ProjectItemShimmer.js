
const ProjectItemShimmer = ({ item }) => {

    return (
        <div className='flex mb-4 pb-4 border-b border-center-image last:border-0'>
            <div className="w-44 min-w-[176px] h-48 rounded border bg-gray-100 animate-pulse"></div>
            <div className="flex-grow px-3 pt-1">
                <div className='w-40 h-5 rounded-sm mb-3 bg-gray-100 animate-pulse'></div>
                <div className='w-full h-5 rounded-sm bg-gray-100 animate-pulse'></div>
                <div className='w-full h-5 rounded-sm bg-gray-100 animate-pulse mt-2'></div>
                <div className='w-1/2 h-5 rounded-sm bg-gray-100 animate-pulse mt-2'></div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                    {[1, 2, 3, 4, 5].map(item => {
                        return <span className='w-16 h-6 rounded-sm bg-gray-100 animate-pulse'></span>
                    })}
                </div>
                <div className="flex justify-end pt-4">
                    <div className="w-28 h-8 rounded bg-gray-100 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItemShimmer