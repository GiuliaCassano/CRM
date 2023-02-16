import { CardActivities } from "../components/CardActivities";
import { CardContact } from "../components/CardContact";
import { CardHeader } from "../components/CardHeader";

const HomePage = () => {
  return (
    <div>
      <CardHeader></CardHeader>
      <div className="d-flex justify-content-around mt-5">
        <CardActivities></CardActivities>
        <CardContact></CardContact>
      </div>
    </div>
  );
};
export default HomePage;
