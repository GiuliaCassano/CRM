// *** 8 ***
const ListItemActivity = ({propsContent}) => {
    return (
        <tr>
        <td>{propsContent.activityType}</td>
        <td>{propsContent.dateTime}</td>
        <td>{propsContent.description}</td>
        <td>{propsContent.manager}</td>
        <td>
        <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
       
    )
}
export {ListItemActivity}


