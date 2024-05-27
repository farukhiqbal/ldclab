import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Departments from "./component/pages/Departments";
import Contactus from "./component/pages/Contactus";
import Toxicology from "./component/ForDoctors/Toxicology";
import Histopathology from "./component/ForDoctors/Histopathology";
import Hematopathology from "./component/ForDoctors/Hematopathology";
import Chemicalpathology from "./component/ForDoctors/Chemicalpathology";
import Microbiology from "./component/ForDoctors/Microbiology";
import Virology from "./component/ForDoctors/Virology";
import Molecular from "./component/ForDoctors/Molecular";
import Homesampling from "./component/Forpatients/Homesampling";
import Login from "./component/Login&Sign/Login";
import Signup from "./component/Login&Sign/Signup";
import Sidebar from "./Dashboard/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import { useState } from "react";
import MainFile from "./Dashboard/MainFile";
import HealthPackages from "./component/pages/HealthPackages";
import CartPage from "./component/pages/CartPage";
import Frenchise from "./component/pages/Frenchise";
import FrenchiseForm from "./component/Frenchisefrom/FrenchiseForm";
import JobsForm from "./component/JobsForm/JobsForm";
import GetFranchise from "./Dashboard/GetFranchise";

function App() {

  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/frenchise' element={<Frenchise/>}/>
          <Route path='/department' element={<Departments/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/Toxicology' element={<Toxicology/>}/>
          <Route path='/Histopathology' element={<Histopathology/>}/>
          <Route path='/Hematopathology' element={<Hematopathology/>}/>
          <Route path='/ChemicalPathology' element={<Chemicalpathology/>}/>
          <Route path='/Microbiology' element={<Microbiology/>}/>
          <Route path='/Virology' element={<Virology/>}/>
          <Route path='/molecular' element={<Molecular/>}/>
          <Route path='/homesampling' element={<Homesampling/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/homeSampling' element={<Homesampling/>}/>
          <Route path='/healthPackages' element={<HealthPackages/>}/>
          <Route path='/Cartpage/:id' element={<CartPage/>}/> 
          <Route path='/frenchisefrom' element={<FrenchiseForm/>}/>  */}


          {/* <Route  path='/' element={<MainFile/>}/> */}


          {/* <Route  path='/maindashboard' element={<MainFile/>}/>

            


          
    

      {/* </Routes> */}



     {/* <JobsForm/> */}


  

       <GetFranchise/>
     <Dashboard/>
      
    </>
  );
}

export default App;
