import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Question1 from "./pages/quiz/Question1"
import Question2 from "./pages/quiz/Question2"
import Question3 from "./pages/quiz/Question3"
import Question4 from "./pages/quiz/Question4"
 
import Main from "./pages/Main";

const OurRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route element = { <Main />  }  path="/" />
           <Route element = { <Question1/>} path="/quiz"/>
           <Route element = { <Question2/>} path="/q2"/>
           <Route element = { <Question3/> } path="/q3"/>
           <Route element = { <Question4/> } path="/q4"/>
           
           </Routes>
       </BrowserRouter>
   )
}

export default OurRoutes;