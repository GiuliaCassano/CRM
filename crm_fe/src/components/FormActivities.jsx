import { useEffect, useState } from "react";
import { ListActivity } from "./ListActivity";
import "./styles/Form.css";

const FormActivities = () => {
  const [datetime, setDatetime] = useState("");
  const [isDateTooEarly, setIsDateTooEarly] = useState(false);
  const [managerValue, setManagerValue] = useState("");
  const [checkInputManager, setCheckInputManager] = useState(false);
  const [activityValue, setActivityValue] = useState("");
  const [checkInputActivity, setCheckInputActivity] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [checkInputDescription, setCheckInputDescription] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);

  //*** 2 ***
  const fetchGetAllActivities = async () => {
    console.log("Fetch");

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/activity/all"); //la response è di tipo promise
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json(); //.json() rende la response un array di oggetti (cioè il contenuto della fetch data dall'url(in postman))
      console.log(data);

      const dataMapped = await data.map((elem, index) => {
        //.map è funzione che scorre gli oggetti dell'array e ritorna un array di oggetti modificato in base alla funzione
        return {
          activityType: elem.activityType,
          contacts: elem.contacts,
          dateTime: elem.dateTime,
          description: elem.description,
          manager: elem.manager,
        };
      });
      console.log(dataMapped);

      setContent(dataMapped); //SE VA TUTTO BENE CONTENT DIVENTA DATAMAPPED
      console.log(content);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setIsLoading(false);
  };

  //ACTIVITY
  const activityChangeHandler = (event) => {
    setActivityValue(event.target.value);
    if (event.target.value.length >= 3) {
      setCheckInputActivity(true);
    } else setCheckInputActivity(false);
  };

  
   function datetimeChangeHandler(event) {
    setIsDateTooEarly(false);
    if (!event.target["validity"].valid) return;
    const datetime = event.target["value"] + ":00Z";
    const today = new Date();
    const enteredDate = new Date(datetime);
    if (enteredDate < today) {
      setIsDateTooEarly(true);
      console.log("The date entered cannot be earlier than today's date!");
    } else {
      setDatetime(datetime);
    }
  }
  
  


  //MANAGER
  const managerChangeHandler = (event) => {
    setManagerValue(event.target.value);
    if (event.target.value.length >= 3) {
      setCheckInputManager(true);
    } else setCheckInputManager(false);
  };

  //DESCRIPTION
  const descriptionChangeHandler = (event) => {
    setDescriptionValue(event.target.value);
    if (event.target.value.length <= 200) {
      setCheckInputDescription(true);
    } else setCheckInputDescription(false);
  };

  // ***1*** In react le [] dentro l'useEffect stanno a significare che la funziona avviene al caricamento della pagina
  useEffect(() => {
    fetchGetAllActivities();
  }, []);

  // *** 3 *** Creo If
  // *** 4 *** Creo in components il file ListActivity.jsx
  // *** 6 *** Compilo final = riga 87
  let final = "";

  if (isLoading) {
    final = <div>I'm Loading...</div>;
  }

  if (error) {
    final = <div>Something went wrong, try again!</div>;
  }

  if (content != null) {
    //Se il content è stato riempito ritorna la funzione che specifichiamo sotto
    final = <ListActivity propsContent={content} />; // finale è uguale a ListActivity che ha come proprietà il content
    console.log("Funziona fetch");
  }

  // °°°°°° 1 °°°°°  SUBMIT HANDLER----PER POST ACTIVITIES from FE to DB to TABLE
  const submitHandler = async (event) => {
    event.preventDefault();

    //INIZIO LA FETCH --> POST
    const newActivityToBE = {
      activityType: activityValue,
      dateTime: datetime,
      manager: managerValue,
      description: descriptionValue,
    };

    console.log(newActivityToBE);
    fetch("http://localhost:8080/activity/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newActivityToBE),
    })
      .then((response) => response.json())
      .then((newActivityToBE) => {
        fetchGetAllActivities(),
          console.log(
            "Success, you have posted this new activity to BE",
            newActivityToBE
          );
      })

      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  
  return (
    <div className= "backgroundHome">
    <div className="container background">
      <div className="row justify-content-around">
      <h3 className="col-12 pt-3 text-center col-12 col--sm-8 col-md-6">Add your activity</h3>
        <form className="col-10 pt-3">
          <div className="form-group row">
            <label htmlFor="activityType" className="col-3 col-form-label">
              Activity Type
            </label>
            <div className="col-9">
              <input
                className={`${
                  checkInputActivity == true
                    ? "border border-success"
                    : "border border-danger"
                } 
        form-control`} //In questo modo sono riuscita ad accorpare anche form-control
                onChange={activityChangeHandler}
                type="text"
                id="activityType"
                placeholder="Activity type"/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="booking" className="col-3 col-form-label">
              Day and Time
            </label>
            <div className="col-9">
              <input
                className="form-control"
                type="datetime-local"
                value={(datetime || "").toString().substring(0, 16)}
                onChange={datetimeChangeHandler}
                id="booking"
                name="booking"
                placeholder="Day and Time"
              />
              {isDateTooEarly && (
                <div>The date entered cannot be earlier than today's date!</div>
              )}
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="manager" className="col-3 col-form-label">
              Manager
            </label>
            <div className="col-9">
              <input
                className={`${
                  checkInputManager == true
                    ? "border border-success "
                    : "border border-danger "
                } 
      form-control`}
                onChange={managerChangeHandler}
                value={managerValue}
                type="text"
                id="manager"
                placeholder="Manager's name"/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="description" className="col-3 col-form-label">
              Description
            </label>
            <div className="col-9">
              <textarea
                className={`${
                  checkInputDescription == true
                    ? "border border-success"
                    : "border border-danger"
                } 
           form-control`}
                onChange={descriptionChangeHandler}
                value={descriptionValue}
                name="description"
                id="description"
                cols="30"
                rows="7"></textarea>
            </div>
          </div>

          <div className="col-12 buttons mb-3 ">
            <button
              onClick={submitHandler}
              className="btn mybutton mt-4"
            >
              Add
            </button>
          </div>
        </form>

        <div className="form-group row">{final}</div>
      </div>
    </div>
    </div>
  );
};
export { FormActivities };
