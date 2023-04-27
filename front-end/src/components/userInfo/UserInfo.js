import { useAboutAction } from '@/store/aboutSlice'
import { avatar } from '@/utils/AvatarSet'
import SocialNetworks from './components/SocialNetworks'
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import useTransition from '@/hooks/useTransition'
import { useThemeAction } from '@/store/themeSlice'

const UserInfo = () => {

    const { theme } = useThemeAction()
    const { aboutMe } = useAboutAction()
    const { t } = useTransition()

    return (
        <div className='w-full h-full flex flex-col justify-between items-center pt-10 md:pt-20'>
            <div className="text-center">
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden border mx-auto">
                    <img src={avatar(aboutMe?.avatar)} alt="avatar" className='w-full h-full' />
                </div>
                <p className='text-[34px] text-captionDark dark:text-lightCaptionLight font-bold mt-6'>{aboutMe?.firstName + ' ' + aboutMe?.lastName}</p>
                <p className='text-base text-primary font-medium'>{aboutMe?.job}</p>
                <div className="w-full flex justify-center items-center gap-x-4 mt-8">
                    <SocialNetworks socialNetworks={aboutMe?.socialsNetwork} />
                </div>
            </div>
            <div className={`border-t p-4 w-full flex justify-center items-center gap-x-2 hover:gap-x-3 duration-300 cursor-pointer group
            ${theme === 'dark' ? "border-center-image-dark" : "border-center-image"}`}>
                <p className='text-base text-captionDark dark:text-lightCaptionLight font-bold uppercase'>{t.downloadCV}</p>
                <LoadSvgIcon
                    name="download"
                    color={theme === 'dark' ? "var(--color-lightCaptionLight)" : "var(--color-captionDark)"}
                    size={16}
                    weight={2}
                />
            </div>
        </div>
    )
}

export default UserInfo