import { NavLink } from "react-router-dom";

NavLink;

function Logo(){
    return(
        <NavLink to="/" className="img-fluid" >
            <img src="src\images\LogoC.png" className="img-fluid"  />
        </NavLink>
    )
}

export default Logo;