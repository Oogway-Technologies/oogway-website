import Logo from './Logo'
import Github from './Github'

import Link from 'next/link'
import Discord from './Discord'

interface NavProps {
    links: Array<Object> // Make custom object with href and text properties
}

const Nav = ({ links}: NavProps) => {
    return (
        <nav className="flex flex-wrap items-center justify-around w-full py-4 bg-transparent">
            <div>
                <Logo />
            </div>
            <div className="hidden md:flex space-x-12 px-4 font-sans">
                {
                    links.map((link, idx) => {
                        return (
                            <Link key={idx} href={link.href}>
                                <a className="text-lg">{link.text}</a>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="flex justify-between items-center">
                <Discord />
                <div className="flex w-6 ml-5">
                    <Github />
                </div>
            </div>

        </nav>
    )
}

Nav.defaultProps = {
    links: [
        {
            href: "#process",
            text: "Process"
        },
        {
            href: "#lifeDecisions",
            text: "Life Decisions"
        },
        {
            href: "#values",
            text: "Values"
        },
        {
            href: "#roadmap",
            text: "Roadmap"
        },
        {
            href: "#footer",
            text: "Waitlist"
        },
        {
            href: "https://oogway-app.web.app/",
            text: "Alpha"
        },
    ]
}

export default Nav
