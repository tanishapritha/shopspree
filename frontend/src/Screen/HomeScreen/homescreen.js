import React from "react";
import './homescreen.css'
import HomeBanner from "./HomeBanner/homeBanner";
import HomeDetails from "./HomeDetails/homeDetails";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar";



const HomeScreen = () =>{
    return( 
        <div classname="homescreen">
          <Navbar/>
          <HomeBanner/>
          <HomeDetails/>
          <Footer/>
        </div>
    )
}

export default HomeScreen