import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../pages/Home";
import HomePage from "../pages";
import University1 from "../pages/University1";

export default function RoutesSetup(){
  return(
      <Routes>
        <Route path="/Homepage" element={<HomePage />}></Route>
        <Route path="/Homepage/University/1" element={<University1 />}></Route>
      </Routes>
  )
}