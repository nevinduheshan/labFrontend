import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Employee from "../pages/Empoloyee";

function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/employee" element={<Employee />} />
        </Routes>
    )
}
export default MyRouter;