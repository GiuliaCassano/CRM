import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { FormActivities } from "./components/FormActivities";
import { FormContacts } from "./components/FormContacts";


function App() {
  return (
    <div className="app">
      <Navbar/>
      {/* CREO LE MIE ROTTE */}
      <Routes>
        <Route path="/loginpage" element={<LoginPage />}></Route> 
        <Route path="/" element={<HomePage/>} ></Route> 
        <Route path="/formactivities" element={<FormActivities/>}></Route>
        <Route path="/formcontacts" element={<FormContacts/>}></Route>

        <Route className="not-found" path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
      
       

    
    </div>
  );
}

export default App;
