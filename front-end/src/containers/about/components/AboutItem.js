
const AboutItem = ({ title, value }) => {
    return (
        <div className='flex justify-between items-center border-b border-center-image pb-3 last:border-0'>
            <p className="text-tiny font-medium text-primary capitalize">{title}</p>
            <p className="text-tiny font-medium text-caption">{value}</p>
        </div>
    )
}

export default AboutItem