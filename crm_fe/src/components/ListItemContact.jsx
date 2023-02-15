const ListItemContact = ({ propsContent }) => {
  return (
    <tr>
      <td>{propsContent.firstName}</td>
      <td>{propsContent.lastName}</td>
      <td>{propsContent.country}</td>
      <td>{propsContent.email}</td>
      <td>{propsContent.phoneNumber}</td>
    </tr>
  );
};

export { ListItemContact };
