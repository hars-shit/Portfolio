import React from "react";
import Header from "./Header";
import Data from "./Data";
import '../styles/Home.scss'
import Footer from "./Footer";
export default function Home(){
    return(
        <div className="portfolio">
        
        <Header />
        <Data />
        <Footer />
        
        </div>
    )
}
