import { Outlet } from "react-router-dom";
import MiaNavbar from "./Components/MiaNavbar";
// import { useRef } from 'react';

function Layout() {


    return (
        <>
            <MiaNavbar></MiaNavbar>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default Layout