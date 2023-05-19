import { useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./shopkeeperHome.css"

import { useEffect } from "react";
import { Loader } from "../../Loader/Loader";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import ShopkeeperNav from "./ShopkeeperNav";
import Dashboard from "./Dashboard";

function ShopkeeperHome() {

    const [isLoading,setIsLoading] = useState(true);
    const shopkeeper = useSelector(state=>state.shopkeeper.currentShopkeeper)
    const [flag,setFlag] = useState(true);


    let cssUrls = [
        "./assets/modules/bootstrap/css/bootstrap.min.css",
            "./assets/css/style.css",
            "./assets/css/components.css"
    ]

    useEffect(() => {
        // Dynamically import each CSS file
        const linkElements = [
            
        ];
    
        cssUrls.forEach((cssUrl) => {
          const link = document.createElement('link');
          link.href = cssUrl;
          link.rel = 'stylesheet';
          link.type = 'text/css';
    
          document.head.appendChild(link);
          linkElements.push(link);
        });
        
        setTimeout(()=>setIsLoading(false),1500)
    },[])

    return <>
        {isLoading?<>
            <div className="loader-cover">
                <Loader/>
            </div>
        </>: <div id="app">
            <div className="main-wrapper main-wrapper-1 bg-danger">
                <ShopkeeperNav flag={flag} setFlag={setFlag} shopkeeper={shopkeeper}/>
                <Sidebar/>
                {/* Main Content */}
                <div className="main-content">
                    <Dashboard/>
                </div>
                <footer className="main-footer">
                    <div className="footer-left">
                        Copyright © 2018 <div className="bullet" /> Design By{" "}
                        <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
                    </div>
                    <div className="footer-right"></div>
                </footer>
            </div>
        </div>}
       

    </>
}
export default ShopkeeperHome;