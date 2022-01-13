import Hero from './Hero'
import HeroTagline from './HeroTagline'
import Nav from './Navbar/Nav'

interface Props {
}

const Header = (props: Props) => {
    return (
        <div
            className="md:flex flex-col w-full flex-1
            items-center justify-around text-center
            text-white bg-gradient-radial-cc-30 from-[#681794]/80 to-[#191b1d]">
                <Nav />
                <Hero />
                <HeroTagline />
        </div>

    )
}

export default Header
