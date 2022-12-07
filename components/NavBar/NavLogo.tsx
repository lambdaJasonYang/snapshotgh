import Image from 'next/image'

const NavLogo = (props: any) => {
    return(
      <a className="navbar-brand" href="#">
                <Image src="/vercel.svg" className="d-inline-block align-text-top" width="50" height="50" alt="logo"/>
                Logo
            </a>
    )

}

export default NavLogo;