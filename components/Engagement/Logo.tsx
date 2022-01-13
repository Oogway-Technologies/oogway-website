import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href='/'><Image className="cursor-pointer" src="/oogway_logo.svg" alt="oogway.ai" width="138" height="36"/></Link>
    
    )
}

export default Logo
