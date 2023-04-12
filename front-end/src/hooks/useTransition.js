import fa from '../../public/locales/fa/common.json'
import en from '../../public/locales/en/common.json'
import { useRouter } from 'next/router'

const useTransition = () => {

    const { locale } = useRouter()

    const t = locale === 'fa' ? fa : en

    return {
        locale,
        t
    }

}

export default useTransition