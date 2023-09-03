import React, {useEffect} from "react"
import Header from "../../components/Header.jsx";
import Promo from "./Screens/Promo/Promo.jsx";
import {gsap} from "gsap";
import About from "./Screens/About/About.jsx";
import Benefits from "./Screens/Benefits/Benefits.jsx";
import Services from "./Screens/Services/Services.jsx";
import Visitors from "./Screens/Visitors/Visitors.jsx";
import Horses from "./Screens/Horses/Horses.jsx";
import Form from "./Screens/Form/Form.jsx";
import Reviews from "./Screens/Reviews/Reviews.jsx";
import Contacts from "./Screens/Contacts/Contacts.jsx";
import Footer from "../../components/Footer.jsx";
import {ScrollSmoother} from "../../hooks/ScrollSmoother";

const Main = () => {

    useEffect(()=> {
        gsap.registerPlugin(ScrollSmoother);

        ScrollSmoother.create({
            smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true,           // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        });
    }, []);

    return (
        <>
            <Header/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Promo/>
                    <About/>
                    <Benefits/>
                    <Services/>
                    <Visitors/>
                    <Horses/>
                    <Form/>
                    <Reviews/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Main;