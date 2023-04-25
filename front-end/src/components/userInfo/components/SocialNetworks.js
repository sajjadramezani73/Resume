import { useThemeAction } from '@/store/themeSlice';
import LoadSvgIcon from '@/utils/LoadSvgIcon';
import { useEffect, useState } from 'react'

const SocialNetworks = ({ socialNetworks }) => {

    const { theme } = useThemeAction()

    const [arraySocials, setArraySocials] = useState([]);

    useEffect(() => {
        socialNetworks && setArraySocials(Object.keys(socialNetworks))
    }, [socialNetworks]);

    return (
        <>
            {arraySocials?.map(item => {
                return (
                    <a key={item} href={socialNetworks[item]} target='_blank'>
                        <LoadSvgIcon
                            name={item}
                            color={theme === 'dark' ? "var(--color-lightCaptionLight)" : "var(--color-captionDark)"}
                            size={18}
                        />
                    </a>
                )
            })}
        </>
    )
}

export default SocialNetworks