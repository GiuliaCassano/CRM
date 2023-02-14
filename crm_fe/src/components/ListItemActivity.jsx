// *** 8 ***
const ListItemActivity = ({propsContent}) => {
    return (
        <li>
            <div>Activity Type : {propsContent.activityType}</div>
            <div>Date and Time : {propsContent.dateTime}</div>
            <div>Description : {propsContent.description}</div>
            <div>Manager : {propsContent.manager}</div>
        </li>
    )
}
export {ListItemActivity}