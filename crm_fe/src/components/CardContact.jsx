import { NavLink } from "react-router-dom";
import "./styles/card.css";
const CardContact = () => {
  return (
    <div className="backgroundHome px-5 text-center col-12 col-sm-8 col-md-6 pt-3">
      <h2>Contacts</h2>
      <img src="src\images\Contacts_image.jpg" className="img-fluid" />
      <div className = "py-3">
        The contacts that will appear on the following page will specify their
        personal data. Care must be taken to fill in all fields correctly.{" "}
      </div>
      <NavLink className="button__contacts" to="/formcontacts">
        <button className="btn btn-rounded cardbutton">Go to contacts</button>
      </NavLink>
    </div>
  );
};
export { CardContact };
