import useTransition from '@/hooks/useTransition'
import Button from '../ui/button/Button'
import { useThemeAction } from '@/store/themeSlice'

const ProjectItem = ({ item }) => {

    const { theme } = useThemeAction()
    const { t } = useTransition()

    return (
        <div className={`flex mb-4 pb-4 border-b last:border-0 
        ${theme === 'dark' ? 'border-center-image-dark' : 'border-center-image'}`}>
            <div className="w-44 min-w-[176px] h-48 rounded border overflow-hidden"></div>
            <div className="flex-grow px-3 pt-1">
                <p className='font-semibold text-captionDark dark:text-lightCaptionLight mb-3 capitalize'>{item?.title}</p>
                <p className='text-caption dark:text-lightCaption text-xs font-medium leading-6 capitalize'>{item?.briefDescription}</p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                    {item?.skills?.map(item => {
                        return <span
                            key={item}
                            className='w-max bg-gray-200 dark:bg-lightCaptionLight/70 text-caption text-xxs font-medium px-1.5 pt-1 pb-0.5 rounded capitalize'
                        >
                            {item}
                        </span>
                    })}
                </div>
                <div className="flex justify-end pt-4">
                    <Button
                        title={t.viewOnline}
                        className="!w-auto px-4 h-8 text-xs pt-1 capitalize"
                        onClick={() => window.open(item?.links[0]?.link, '_black')}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem