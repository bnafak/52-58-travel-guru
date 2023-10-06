import { Outlet } from "react-router-dom";
import Banner from "../header/Banner";
import Navbar from "../header/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;