import React from "react"
import Header from "../../Components/Header"
import { Outlet, useLocation } from "react-router-dom"
import styles from "./PagesWrapper.module.css";
import { PathNames } from "../Router/Router";
import Home from "../Home";


const PagesWrapper = () => {
    const { pathname } = useLocation();
    return (
        <div className={styles.container}>
            <Header></Header>
            {pathname === PathNames.Home ? <Home></Home> : <Outlet></Outlet>}
            {/* <Footer></Footer> */}
        </div>
    )

}

export default PagesWrapper