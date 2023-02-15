import { ListItemContact } from "./ListItemContact"

const ListContact = ({propsContent}) => {
    return (
        <table class="table">
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
      {propsContent.map((elem, index) =>{
                return (
                    <ListItemContact key = {index} propsContent = {elem}/>
                )
            })}
      </tbody>
    </table>
       
       
       
      
    )
}

export {ListContact}