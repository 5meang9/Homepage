import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Home from "../pages/Home";
import HomePage from "../pages";
import University1 from "../pages/University1";
import University2 from "../pages/University2";
import University3 from "../pages/University3";
import University4 from "../pages/University4";
import GameProject1 from "../pages/GameProject1";
import GameProject2 from "../pages/GameProject2";
import Bespoke from "../pages/Bespoke";
import Company1 from "../pages/Company1";

export default function RoutesSetup(){
  return(
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/University/1" element={<University1 />}></Route>
        <Route path="/University/2" element={<University2 />}></Route>
        <Route path="/University/3" element={<University3 />}></Route>
        <Route path="/University/4" element={<University4 />}></Route>
        <Route path="/GameProject/1" element={<GameProject1 />}></Route>
        <Route path="/GameProject/2" element={<GameProject2 />}></Route>
        <Route path="/Bespoke/1" element={<Bespoke />}></Route>
        <Route path="/Company/1" element={<Company1 />}></Route>
      </Routes>
  )
}