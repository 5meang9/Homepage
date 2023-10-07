import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../pages/Home";
import HomePage from "../pages";

export default function RoutesSetup(){
  return(
      <Routes>
        <Route path="/Homepage" element={<HomePage />}></Route>
      </Routes>
  )
}