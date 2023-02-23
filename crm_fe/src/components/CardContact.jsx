import { NavLink } from "react-router-dom";
import "./styles/card.css";
const CardContact = () => {
  return (
    <div className="card1 text-center col-12 col-sm-8 col-md-6">
      <h2>Contacts</h2>
      <img src="src\images\Contacts_image.jpg" className="img-fluid" />
      <div>
        The contacts that will appear on the following page will specify their
        personal data. Care must be taken to fill in all fields correctly.{" "}
      </div>
      <NavLink className="button__contacts" to="/formcontacts">
        <button className="btn btn-info btn-rounded">Go to contacts</button>
      </NavLink>
    </div>
  );
};
export { CardContact };
