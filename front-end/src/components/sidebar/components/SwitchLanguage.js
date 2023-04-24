import useTransition from '@/hooks/useTransition';
import LoadSvgIcon from '@/utils/LoadSvgIcon'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const SwitchLanguage = () => {

    const { locale, locales } = useTransition()

    const [showOption, setShowOption] = useState(false);
    const [localeList, setLocaleList] = useState([]);

    useEffect(() => {
        setShowOption(false)
        const newLocales = locales?.map(item => ({
            icon: setIcon(item),
            language: setLanguage(item),
            shortLanguage: item
        }))
        setLocaleList(newLocales)
    }, [locales]);

    const setIcon = (name) => {
        switch (name) {
            case 'fa': return 'iran'
            case 'en': return 'england'
            default:
                break;
        }
    }
    const setLanguage = name => {
        switch (name) {
            case 'fa': return "persian"
            case 'en': return "english"
            default:
                break;
        }
    }


    return (
        <div className='flex justify-between px-2 relative'>
            <div className="w-full flex items-center border rounded py-1 pe-1.5 ps-0.5 rtl cursor-pointer"
                onClick={() => setShowOption(!showOption)}
            >
                <LoadSvgIcon name="downArrow" size={18} />
                <div className="flex-grow text-xs text-captionDark text-end uppercase">{locale}</div>
            </div>
            {showOption && (
                <div className="p-2 absolute top-[30px] start-1.5 z-10 bg-white border rounded shadow">
                    {localeList?.map(item => {
                        return <Link href="" locale={item.shortLanguage}>
                            <div
                                className="flex justify-between items-center rtl gap-x-1 p-1 rounded mb-1.5 last:mb-0 cursor-pointer hover:bg-gray-100 duration-200"
                            >
                                <p className='capitalize pt-0.5'>{item.language}</p>
                                <LoadSvgIcon name={item.icon} />
                            </div>
                        </Link>
                    })}
                </div>
            )}
        </div>
    )
}

export default SwitchLanguage