import React, {useEffect, useState} from "react"
import Logo from "./ui/Logo.jsx";
import Nav from "./ui/Nav.jsx";

const Header = () => {
    const [activeHeader, setActiveHeader] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 10) {
                setActiveHeader(true);
            } else {
                setActiveHeader(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={`header ${activeHeader ? "active" : ""}`}>
            <div className="container">
                <Logo/>
                <div className="header__wrap">
                    <Nav/>
                    <div className="header__contact">
                        <a href="tel:+380410926118" aria-label="Contact phone">
                            <img src="/images/ui/phone.svg" alt="phone icon"/>
                            <span>+38 (0410) 926 118</span>
                        </a>
                        <span className="header__contact-label">Щодня 9:00 – 21:00</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;