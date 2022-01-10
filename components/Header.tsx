import Hero from './Hero'
import HeroTagline from './HeroTagline'
import Nav from './Nav'

interface Props {
}

const Header = (props: Props) => {
    return (
        <div
            className="md:flex flex-col w-full flex-1
            items-center justify-around text-center
            text-white bg-gradient-radial-cc-30 from-purple-700/50 to-black/50">
                <Nav />
                <Hero />
                <HeroTagline />
        </div>

    )
}

export default Header
