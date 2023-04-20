import LoadSvgIcon from '@/utils/LoadSvgIcon';
import { useEffect, useState } from 'react'

const SocialNetworks = ({ socialNetworks }) => {

    const [arraySocials, setArraySocials] = useState([]);

    useEffect(() => {
        socialNetworks && setArraySocials(Object.keys(socialNetworks))
    }, [socialNetworks]);

    return (
        <>
            {arraySocials?.map(item => {
                return (
                    <a href={socialNetworks[item]} target='_blank'>
                        <LoadSvgIcon name={item} color="var(--color-captionDark)" size={18} />
                    </a>
                )
            })}
        </>
    )
}

export default SocialNetworks