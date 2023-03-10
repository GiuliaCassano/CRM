import { NavLink } from "react-router-dom";

const CardActivities = () => {
  return (
    <div className="backgroundHome px-5 text-center col-12 col-sm-8 col-md-6 pt-3 pb-5">
      <h2>Activities</h2>
      <img src="src\images\ImageActivity.jpg" className="img-fluid" />
      <div className= "py-3">
        {" "}
        The activities that will appear on the following page will specify the
        type, date and time of the appointment with the manager and a brief
        description of the activity.{" "}
      </div >
      <NavLink className="button__activities" to="/formactivities">
        <button className="btn btn-rounded cardbutton">Go to activities</button>
      </NavLink>
    </div>
  );
};
export { CardActivities };
