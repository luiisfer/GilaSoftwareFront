import {NavLink} from "react-router-dom";

const Navbar = ()  => {

    const active = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'  className={ ( { isActive } ) =>
                            isActive ? active : undefined}>
                        App
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/form'  className={ ( { isActive } ) =>
                        isActive ? active : undefined}>
                        Form
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/logs' className={ ( { isActive } ) =>
                        isActive ? active : undefined}>
                        Logs
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar