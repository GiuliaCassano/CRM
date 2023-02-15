// *** 8 ***
const ListItemActivity = ({propsContent}) => {
    return (
        <tr>
        <td>{propsContent.activityType}</td>
        <td>{propsContent.dateTime}</td>
        <td>{propsContent.description}</td>
        <td>{propsContent.manager}</td>
      </tr>
       
    )
}
export {ListItemActivity}