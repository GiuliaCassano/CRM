import { CardActivities } from "../components/CardActivities";
import { CardContact } from "../components/CardContact";
import { CardHeader } from "../components/CardHeader";

const HomePage = () => {
  return (
    <div>
      <CardHeader></CardHeader>
      
      <div className="container">
        <div className="row justify-content-around">
          <CardActivities />
          <CardContact />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
