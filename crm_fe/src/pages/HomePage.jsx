import { CardActivities } from "../components/CardActivities";
import { CardContact } from "../components/CardContact";
import { CardHeader } from "../components/CardHeader";

const HomePage = () => {
  return (
    <div className="backgroundHome">
      <CardHeader></CardHeader>

      <div className="container ">
        <div className="row justify-content-around">
          <CardContact />
          <CardActivities />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
