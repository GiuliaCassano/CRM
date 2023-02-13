import { NavLink } from "react-router-dom";

NavLink;

function Logo(){
    return(
        <NavLink to="/home" className="img-fluid" >
            <img src="src\images\Logo_cromo.png" className="mx-5"  />
        </NavLink>
    )
}

export default Logo;