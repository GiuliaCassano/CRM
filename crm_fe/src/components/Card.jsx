import { CardActivities } from "./CardActivities";
import { CardContact } from "./CardContact";
import { CardHeader } from "./CardHeader";


const Card = () => {
    return (
        <div>
           <CardHeader></CardHeader>
           <div className="d-flex justify-content-around mt-5">
           <CardActivities></CardActivities>
           <CardContact></CardContact>
            </div>
        </div>
    )
}
export { Card };