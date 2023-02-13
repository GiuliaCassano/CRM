import { NavLink } from "react-router-dom";

const CardContact = () => {
    return (
        <div class="card text-center">
            <h2>Contacts</h2>
            <img src="src\images\Contacts_image.jpg" className=""  />
            <div> *** TESTO DA INSERIRE ***</div>
           <NavLink className="button__contacts" to="/formcontacts">
           <button>Go to contacts</button>
           </NavLink>
        </div>
    )
}
export { CardContact };