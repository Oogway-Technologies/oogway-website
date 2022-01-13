import Discord from '../Engagement/Discord'
import Github from '../Engagement/Github'

const Contribute = () => {
    return (
        <div className="flex items-center">
        <Discord />
        <div className="hidden md:flex w-6 ml-5">
            <Github />
        </div>
    </div>
    )
}

export default Contribute
