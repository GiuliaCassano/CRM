import { NavLink } from "react-router-dom";

const CardActivities = () => {
  return (
    <div className="card1 text-center col-4">
      <h2>Activities</h2>
      <img src="src\images\ImageActivity.jpg" className="" />
      <div> The activities that will appear on the following page will specify the type, date and time of the appointment with the manager and a brief description of the activity. </div>
      <NavLink className="button__activities" to="/formactivities">
        <button className="btn btn-info btn-rounded">Go to activities</button>
      </NavLink>
    </div>
  );
};
export { CardActivities };
