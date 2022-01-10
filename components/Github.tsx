import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import internal from 'stream'

interface GithubProps {
    href: string
}


const Github = ({ href}: GithubProps) => {
    const githubIcon = <FontAwesomeIcon className="cursor-pointer ease-in-out duration-500 hover:blur-sm" icon={faGithub} />

    return (
        <Link href={href}>
            {githubIcon}
        </Link>
    )
}

Github.defaultProps = {
    href: 'https://github.com/Oogway-Technologies'
}

export default Github
