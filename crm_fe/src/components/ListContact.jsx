import { ListItemContact } from "./ListItemContact";

const ListContact = ({ propsContent, deleteControlHandler, updateControlHandler }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className = "pb-3" scope="col">First name</th>
          <th className = "pb-3" scope="col">Last name</th>
          <th className = "pb-3" scope="col">Country</th>
          <th className = "pb-3" scope="col">Email</th>
          <th className = "pb-3" scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {propsContent.map((elem, index) => {
          return (
            <ListItemContact
              key={index}
              id={propsContent.id}
              propsContent={elem}
              deleteControlHandler={deleteControlHandler}
              updateControlHandler={updateControlHandler}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export { ListContact };
