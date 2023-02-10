//import { Routes, Route } from "react-router-dom"
import { ActivitiesForm } from "./components/ActivitiesForm"
import { ContactsForm } from "./components/ContactsForm"
// import { Home } from "./components/Home"
import { LoginUser } from "./components/LoginUser"

function App() {

  return (
    <div>
       <ContactsForm></ContactsForm> 



      <ActivitiesForm></ActivitiesForm>
       <LoginUser></LoginUser> 



{/*
    <Routes>
       <Route path = '/' element = {<Home/>} ></Route>  Home è l'elemento che viene renderizzato 
    </Routes>
    */}
    </div>
  )
}

export default App
