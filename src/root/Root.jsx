import { Route, Routes } from "react-router-dom";
import Home from '../Home';
import Recordings from "../Recordings";

export default function Root(){
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/recordings" element={<Recordings />} ></Route>
        </Routes>
    )
}