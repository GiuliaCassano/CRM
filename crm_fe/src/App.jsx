import { Routes, Route } from "react-router-dom";
import'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavbar";
import OurValues from "./pages/TicketsPage";
import AboutUs from "./pages/AboutUs";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import TicketsPage from "./pages/TicketsPage";
import { FormActivities } from "./components/FormActivities";
import { FormContacts } from "./components/FormContacts";


function App() {
  return (
    <div className="app">
      <MyNavbar/>
      {/* CREO LE MIE ROTTE */}
      <Routes>
        <Route path= "/ticket" element = {<TicketsPage/>}/>
        <Route path ="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/signuppage" element={<SignUpPage />}></Route> 
        <Route path="/signinpage" element={<SignInPage />}></Route> 
        <Route path="/" element={<HomePage/>} ></Route> 
        <Route path="/formactivities" element={<FormActivities/>}></Route>
        <Route path="/formcontacts" element={<FormContacts/>}></Route>
        <Route path="/updatecontact" element={<FormContacts/>}></Route>

        <Route className="not-found" path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
      
       

    
    </div>
  );
}

export default App;
