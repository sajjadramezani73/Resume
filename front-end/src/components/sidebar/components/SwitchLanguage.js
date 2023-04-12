import Link from 'next/link'

const SwitchLanguage = () => {
    return (
        <div className='flex justify-between px-4'>
            <div>
                <Link href="/about" locale="en">
                    en
                </Link>
            </div>
            <div>
                <Link href="/about" locale="fa">
                    fa
                </Link>
            </div>
        </div>
    )
}

export default SwitchLanguage