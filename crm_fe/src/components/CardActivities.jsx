import { NavLink } from "react-router-dom";

const CardActivities = () => {
  return (
    <div class="card text-center">
      <h2>Activities</h2>
      <img src="src\images\ImageActivity.jpg" className="" />
      <div> *** TESTO DA INSERIRE ***</div>
      <NavLink className="button__activities" to="/formactivities">
        <button>Go to activities</button>
      </NavLink>
    </div>
  );
};
export { CardActivities };
