import { useState } from "react";


const FormActivities = () => {

    const [datetime, setDatetime] = useState('');
    const [managerValue, setManagerValue] = useState("");
    const [checkInputManager, setCheckInputManager] = useState(false);
    const [activityValue, setActivityValue] = useState("");
    const [checkInputActivity, setCheckInputActivity] = useState(false);
   
    //ACTIVITY
    const activityChangeHandler = (event) => {
        setActivityValue(event.target.value);
        if (event.target.value.length >= 3) {
            setCheckInputActivity(true);
        } else setCheckInputActivity(false);
      };


    //DATETIME
      function datetimeChangeHandler(event) {
        if (!event.target['validity'].valid) return;
        const datetime= event.target['value'] + ':00Z';
        setDatetime(datetime);
      }

    //MANAGER
      const managerChangeHandler = (event) => {
        setManagerValue(event.target.value);
        if (event.target.value.length >= 3){
            setCheckInputManager(true);
        } else setCheckInputManager(false);
      }

    const submitHandler = (event) => {
        event.preventDefault();
      };

  return (
    <section className= "container">
    <div className= "row col-4">
    <form onSubmit={submitHandler} className = "d-flex flex-column m-2 p-3 border border-dark rounded">

        <label htmlFor="activityType">Activity type</label>
        <input 
        className = {
            checkInputActivity == true
            ? "border border-success border-0 border-bottom"
            : "border border-danger border-0 border-bottom"
        }
        onChange= {activityChangeHandler}
        type="text" 
        id="activityType"
        />

        <label htmlFor="booking">Date and Time</label>
        <input 
        type="datetime-local"
        value={(datetime || '').toString().substring(0,16)}
        onChange={datetimeChangeHandler}
        id="booking" 
        name="booking" 
        />

        <label htmlFor="manager">Manager</label>
        <input  
        className = {
            checkInputManager == true
            ? "border border-success border-0 border-bottom"
            : "border border-danger border-0 border-bottom"
        }       
        onChange = {managerChangeHandler}
        value= {managerValue} 
        type="text" 
        id="manager" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="7"></textarea>

        <button className = "btn btn-success mt-4">Add</button>
        <button className = "btn btn-danger mt-4">Delete</button>

      </form>
      </div>
    </section>
  );
  
};
export {FormActivities};
