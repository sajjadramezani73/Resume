import fa from '../../public/locales/fa/common.json'
import en from '../../public/locales/en/common.json'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useTransition = () => {

    const { locale } = useRouter()

    useEffect(() => {
        localStorage.setItem('location', locale)
    }, [locale]);

    const t = locale === 'fa' ? fa : en

    return {
        locale,
        t
    }

}

export default useTransition