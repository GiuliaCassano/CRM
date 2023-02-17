import { NavLink } from "react-router-dom";

const CardContact = () => {
    return (
        <div className="card text-center col-4">
            <h2>Contacts</h2>
            <img src="src\images\Contacts_image.jpg" className=""  />
            <div>The contacts that appear on the following page will specify their personal data, taking care to fill in all fields correctly. </div>
           <NavLink className="button__contacts" to="/formcontacts">
           <button>Go to contacts</button>
           </NavLink>
        </div>
    )
}
export { CardContact };