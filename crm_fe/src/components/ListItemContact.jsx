const ListItemContact = ({ propsContent, deleteControlHandler, updateControlHandler}) => {
  return (
    <>
      <tr>
        <td>{propsContent.firstName}</td>
        <td>{propsContent.lastName}</td>
        <td>{propsContent.country}</td>
        <td>{propsContent.email}</td>
        <td>{propsContent.phoneNumber}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick = {() => deleteControlHandler(propsContent.id)}>Delete
          </button>
        </td>

        <td>
          <button
            className="btn btn-danger"
            onClick = {() => updateControlHandler(propsContent.id)}>Update
          </button>
        </td>
      </tr>
    </>
  );
};

export { ListItemContact };
