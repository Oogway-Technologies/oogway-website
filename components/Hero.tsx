interface HeroProps {
    text: string
}

const Hero = ({ text }: HeroProps) => {
    return (
        <h1 className="break-words pt-56 text-4xl md:text-6xl lg:text-8xl font-bold tacking-wide font-display bg-gradient-to-r from-slate-200 via-[#4d6be1] to-fuchsia-500 text-transparent bg-clip-text">
            {text}
        </h1>
    )
}

Hero.defaultProps = {
    text: "Make Better Decisions"
}

export default Hero
