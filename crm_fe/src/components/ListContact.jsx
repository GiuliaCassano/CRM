import { ListItemContact } from "./ListItemContact";

const ListContact = ({ propsContent, deleteControlHandler }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Country</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
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
            />
          );
        })}
      </tbody>
    </table>
  );
};
export { ListContact };
