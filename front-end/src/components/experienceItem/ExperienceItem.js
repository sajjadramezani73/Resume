
const experienceItem = ({ item }) => {
    return (
        <div className='w-full flex group'>
            <div className="w-44 min-w-[176px] text-end">
                <p className="text-xs text-captionDark font-semibold pt-0.5">{item?.dateStart} - {item?.dateEnd}</p>
                <p className="text-xs text-captionLight pt-0.5">{item?.company}</p>
            </div>
            <div className="border-r relative mx-6">
                <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white rounded-full border-2 border-primary ring-[5px] ring-primary/30"></span>
            </div>
            <div className="pb-7 group-last:pb-0 w-full">
                <p className="text-base text-captionDark font-semibold capitalize">{item?.title}</p>
                <p className="text-sm text-caption mt-2">{item?.description}</p>
            </div>
        </div>
    )
}

export default experienceItem