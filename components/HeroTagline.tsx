import { TextLoop } from 'react-text-loop-next';

interface HeroTaglineProps {
    tagline: string,
    questionArray: Array<string>
}

const HeroTagline = ({ tagline, questionArray }: HeroTaglineProps) => {
    return (
        <>
        <div className="mt-3 mx-5 break-words text-sm md:text-xl font-sans">
            <TextLoop
                springConfig={{ stiffness: 180, damping: 16}} 
                children={questionArray} />{" "}
                <span className='block md:inline-flex'>if you always made the right decision?</span>
        </div>
        <p className="mt-64 break-words text-sm md:text-lg font-sans">
            {tagline}
        </p>
        </>
    )
}

HeroTagline.defaultProps = {
    tagline: "Oogway is your personalized AI decision assistant",
    questionArray: [
        "What would your life be like",
        "Where would you live",
        "What job would you have",
        "How much money would you save",
        "What college would you go to"
    ]
}

export default HeroTagline
