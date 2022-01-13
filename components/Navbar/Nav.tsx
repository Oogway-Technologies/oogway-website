import Logo from '../Engagement/Logo'
import Contribute from './Contribute'
import MobileDropdown from './MobileDropdown'
import NavLinks from './NavLinks'

interface NavProps {
    links: Array<NavLink>
}

type NavLink = {
    href: string,
    text: string
}

const Nav = ({ links }: NavProps) => {
    

    return (
        <nav className="flex flex-wrap items-center justify-around w-full py-4 bg-transparent">
            <Logo />
            <NavLinks links={links}/>
            <Contribute />
            <MobileDropdown links={links}/>
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
