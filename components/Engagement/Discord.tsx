import Link from 'next/link'

interface DiscordProps {
    href: string
}

const Discord = ({ href }: DiscordProps) => {
    return (
        <button className="rounded-md break-words ease-in-out duration-300 bg-[#921e9e] text-white hover:bg-white hover:text-black p-3 font-sans">
            <Link href={href}>
                <a className="text-sm md:text-base ">Contribute in Discord!</a>
            </Link>
        </button>
    )
}

Discord.defaultProps = {
    href: "https://discord.gg/GYKDE85pxN"
}

export default Discord
