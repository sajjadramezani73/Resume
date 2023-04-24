import useTransition from '@/hooks/useTransition'
import Button from '../ui/button/Button'

const ProjectItem = ({ item }) => {

    const { t } = useTransition()

    return (
        <div className='flex mb-4 pb-4 border-b border-center-image last:border-0'>
            <div className="w-44 min-w-[176px] h-48 rounded border overflow-hidden"></div>
            <div className="flex-grow px-3 pt-1">
                <p className='font-semibold text-captionDark mb-3 capitalize'>{item?.title}</p>
                <p className='text-caption text-xs font-medium leading-6 capitalize'>{item?.briefDescription}</p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                    {item?.skills?.map(item => {
                        return <span
                            key={item}
                            className='w-max bg-gray-200 text-caption text-xxs font-medium px-1.5 pt-1 pb-0.5 rounded capitalize'
                        >
                            {item}
                        </span>
                    })}
                </div>
                <div className="flex justify-end pt-4">
                    <Button
                        title={t.viewOnline}
                        className="w-auto px-4 h-8 text-xs capitalize"
                        onClick={() => window.open(item?.links[0]?.link, '_black')}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem