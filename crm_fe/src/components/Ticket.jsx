// imports 2°
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/ticket.css";

const Ticket = () => {
  const [content, setContent] = useState(null);

  //useLocation è funzione che prende lo state riga 27 di ListItemActivity
  const location = useLocation();

  const fetchActivityById = async () => {
    const response = await fetch(
      "http://localhost:8080/activity/find/id?id=" + location.state
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

    setContent(data);
    console.log(content);
  };

  let final = "";
  let final2 = "";
  if (content != null) {
    final = content;
    console.log(final);
    final2 = final.contacts.map((elem, index) => {
      return (
        
          <div className="row ticket">
          <div className="col-3 ticketName">
            {elem.firstName} {elem.lastName}
          </div>
          <div className="col-3"> {final.activityType}</div>
          <div className="col-3"> {final.manager}</div>
          <div className="col-3">
            {new Date(final.dateTime).toLocaleDateString()} 
            {new Date(final.dateTime).toLocaleTimeString()}
          </div>
          </div>
      
      );
    });
    console.log(final2);
  }

  useEffect(() => {
    console.log(location.state);
    fetchActivityById();
  }, []);

  return (
    <div className="backgroundHome base">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <h2 className="animated swing ticket-title mt-3 pt-2">Ticket recap</h2>
      <div className="container background py-2 ">{final2}</div>
    </div>
  );
};

export default Ticket;
