// *** 5 *** Compilo e torno in formActivities
// *** 7 ** * Faccio nuovo component ListItemActivity

import { ListItemActivity } from "./ListItemActivity";

const ListActivity = ({ propsContent, deleteControlHandler }) => {
  return (
    <table className="table ">
      <thead>
        <tr >
          <th className = "pb-3" scope="col">Activity Type</th>
          <th className = "pb-3" scope="col">Date and Time</th>
          <th className = "pb-3" scope="col">Description</th>
          <th className = "pb-3" scope="col">Manager</th>
        </tr>
      </thead>
      <tbody>
        {propsContent.map((elem, index) => {
          return <ListItemActivity
          key={index} 
          propsContent={elem}
          deleteControlHandler={deleteControlHandler}
          />;
        })}
      </tbody>
    </table>


  );
};
export { ListActivity };
