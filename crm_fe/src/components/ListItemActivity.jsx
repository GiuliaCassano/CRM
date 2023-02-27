import { NavLink } from "react-router-dom";

// *** 8 ***
const ListItemActivity = ({ propsContent, deleteControlHandler }) => {
 

  return (
    <tr>
      <td>{propsContent.activityType}</td>
      <td>
        {new Date(propsContent.dateTime).toLocaleDateString()},
        {new Date(propsContent.dateTime).toLocaleTimeString()}
      </td>
      <td>{propsContent.description}</td>
      <td>{propsContent.manager}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteControlHandler(propsContent.id)}
        >
          Delete
        </button>
      </td>
      <td>
        {/* state 1° */}
        <NavLink state = {propsContent.id} to="/ticket">
          <button className="btn btn-danger">
            Info
          </button>
        </NavLink>
      </td>
    </tr>
  );
};
export { ListItemActivity };
