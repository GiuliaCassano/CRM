// *** 5 *** Compilo e torno in formActivities
// *** 7 ** * Faccio nuovo component ListItemActivity

import { ListItemActivity } from "./ListItemActivity";

const ListActivity = ({ propsContent }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Activity Type</th>
          <th scope="col">Date and Time</th>
          <th scope="col">Description</th>
          <th scope="col">Manager</th>
        </tr>
      </thead>
      <tbody>
        {propsContent.map((elem, index) => {
          return <ListItemActivity key={index} propsContent={elem} />;
        })}
      </tbody>
    </table>


  );
};
export { ListActivity };
