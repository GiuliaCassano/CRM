import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import './styles/navbar.css'

export default function Navbar(){
    const items = ["LoginUser", "Home"];

    return(
        <header className="navbar d-flex justify-content-md-between">
            <Logo/>
            <NavLink className="navbar__item" to="/loginpage">Login User</NavLink>
        </header>
    )
}