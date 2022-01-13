import Link from 'next/link'
import { Menu } from '@headlessui/react'

interface NavDropdownLinksProps {
    links: Array<NavLink>
}

type NavLink = {
    href: string,
    text: string
}

const NavDropdownLinks = ({ links }: NavDropdownLinksProps) => {
    const navDropdownLinksClass:string = "block text-sm px-2 py-1 transition duration-300 hover:text-[#79197c]"

    return (
        <>
        {
            links.map((link, idx) => {
                /** Warns about passing a prop to href. 
                 * Might need to undo functional approach here an manually enumerate each link.
                 * */  
                return (
                    <Menu.Item key={idx}>
                        <Link key={idx} href={link.href}> 
                            <a className={navDropdownLinksClass}>{link.text}</a>
                        </Link>
                    </Menu.Item>
                )
            })
        }
        </>
    )
}

export default NavDropdownLinks
