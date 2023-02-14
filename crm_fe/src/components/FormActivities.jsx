import { useEffect, useState } from "react";
import { ListActivity } from "./ListActivity";

const FormActivities = () => {
  const [datetime, setDatetime] = useState("");
  const [managerValue, setManagerValue] = useState("");
  const [checkInputManager, setCheckInputManager] = useState(false);
  const [activityValue, setActivityValue] = useState("");
  const [checkInputActivity, setCheckInputActivity] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(null);

  //*** 2 ***
  const fetchGetAllActivities = async() => {
    console.log("Fetch");

    try {
      const response = await fetch("http://localhost:8080/activity/all"); //la response è di tipo promise
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      };

      const data = await response.json(); //.json() rende la response un array di oggetti (cioè il contenuto della fetch data dall'url(in postman))
      console.log(data);

      const dataMapped = await data.map((elem, index) => { //.map è funzione che scorre gli oggetti dell'array e ritorna un array di oggetti modificato in base alla funzione
        return {
          activityType : elem.activityType,
          contacts : elem.contacts,
          dateTime : elem.dateTime,
          description : elem.description,
          manager : elem.manager
        }
      }
      )
      console.log(dataMapped);

      setContent(dataMapped); //SE VA TUTTO BENE CONTENT DIVENTA DATAMAPPED
      console.log(content);

    } catch (error) {
      setError(error)
      console.log(error);
    }
  }

  //ACTIVITY
  const activityChangeHandler = (event) => {
    setActivityValue(event.target.value);
    if (event.target.value.length >= 3) {
      setCheckInputActivity(true);
    } else setCheckInputActivity(false);
  };

  //DATETIME
  function datetimeChangeHandler(event) {
    if (!event.target["validity"].valid) return;
    const datetime = event.target["value"] + ":00Z";
    setDatetime(datetime);
  }

  //MANAGER
  const managerChangeHandler = (event) => {
    setManagerValue(event.target.value);
    if (event.target.value.length >= 3) {
      setCheckInputManager(true);
    } else setCheckInputManager(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // ***1*** In react le [] dentro l'useEffect stanno a significare che la funziona avviene al caricamento della pagina
  useEffect(() => {
    fetchGetAllActivities();
  }, 
  []);
   
   
  // *** 3 *** Creo If
  // *** 4 *** Creo in components il file ListActivity.jsx
  // *** 6 *** Compilo final = riga 87
  let final = "";
  if(content != null){ //Se il content è stato riempito ritorna la funzione che specifichiamo sotto
    final = <ListActivity propsContent={content}/> // finale è uguale a ListActivity che ha come proprietà il content
    console.log("Funziona fetch")
  }

  return (
    <section className="container">
      <div className="row col-4">
        <form
          onSubmit={submitHandler}
          className="d-flex flex-column m-2 p-3 border border-dark rounded"
        >
          <label htmlFor="activityType">Activity type</label>
          <input
            className={
              checkInputActivity == true
                ? "border border-success border-0 border-bottom"
                : "border border-danger border-0 border-bottom"
            }
            onChange={activityChangeHandler}
            type="text"
            id="activityType"
          />

          <label htmlFor="booking">Date and Time</label>
          <input
            type="datetime-local"
            value={(datetime || "").toString().substring(0, 16)}
            onChange={datetimeChangeHandler}
            id="booking"
            name="booking"
          />

          <label htmlFor="manager">Manager</label>
          <input
            className={
              checkInputManager == true
                ? "border border-success border-0 border-bottom"
                : "border border-danger border-0 border-bottom"
            }
            onChange={managerChangeHandler}
            value={managerValue}
            type="text"
            id="manager"
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="7"
          ></textarea>

          <button className="btn btn-success mt-4">Add</button>
          <button className="btn btn-danger mt-4">Delete</button>
        </form>
        {final}
      </div>
    </section>
  );
};
export { FormActivities };
