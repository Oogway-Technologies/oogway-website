import Link from 'next/link'

interface NavLinksProps {
    links: Array<NavLink>
}

type NavLink = {
    href: string,
    text: string
}

const NavLinks = ({ links }: NavLinksProps) => {
    return (
        <div className="hidden lg:flex space-x-12 px-4 font-sans">
            {
                links.map((link, idx) => {
                    /** Warns about passing a prop to href. 
                     * Might need to undo functional approach here an manually enumerate each link.
                     * */  
                    return (
                        <Link key={idx} href={link.href}> 
                            <a className="text-lg hover:text-[#79197c]">{link.text}</a>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default NavLinks
