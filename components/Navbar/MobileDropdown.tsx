import NavDropdownButton from './NavDropdownButton'
import NavDropdownLinks from './NavDropdownLinks'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface MobileDropdownProps {
    links: Array<NavLink>
}

type NavLink = {
    href: string,
    text: string
}

const MobileDropdown = ({ links }: MobileDropdownProps) => {
    const menuButtonClass: string = "lg:hidden inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-black/20 rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    const menuItemsClass: string = "absolute right-0 w-56 mt-2 origin-top-right bg-black/20 divide-y divide-gray-100/20 rounded-md shadow-lg ring-1 ring-black ring-opacity-50 focus:outline-none"

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={menuButtonClass} >
                <NavDropdownButton />
            </Menu.Button>
            <Transition
            as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
            <Menu.Items className={menuItemsClass}><NavDropdownLinks links={links}/></Menu.Items>
            </Transition>
        </Menu>
    )
}

export default MobileDropdown
