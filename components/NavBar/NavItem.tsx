interface IProps {
    label: string,
    link: string,
}

const NavItem = ({label="his",link="#",...props} : IProps) => {
    return(
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={link}>{label}</a>
            </li>
    )

}

export default NavItem;
