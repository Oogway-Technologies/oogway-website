import { TextLoop } from 'react-text-loop-next';

interface HeroTaglineProps {
    tagline: string,
    questionArray: Array<string>
}

const HeroTagline = ({ tagline, questionArray }: HeroTaglineProps) => {
    return (
        <>
        <div className="mt-3 break-words text-xl font-sans">
            <TextLoop
                springConfig={{ stiffness: 180, damping: 16}} 
                children={questionArray} />{" "}
                if you always made the right decision?
        </div>
        <p className="mt-64 break-words text-l font-sans">
            {tagline}
        </p>
        </>
    )
}

HeroTagline.defaultProps = {
    tagline: "Oogway is your personalized AI assistant.",
    questionArray: [
        "What would your life be like",
        "Where would you live",
        "What job would you have",
        "How much money would you save",
        "What college would you go to"
    ]
}

export default HeroTagline
