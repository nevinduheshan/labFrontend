import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Employee from "../pages/Empoloyee";
import EmployeeCreate from "../pages/EmployeeCreate";

function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employees/create" element={<EmployeeCreate />} />
        </Routes>
    )
}
export default MyRouter;