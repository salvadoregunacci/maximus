import React from "react"
import Logo from "./ui/Logo.jsx";
import OutlineButton from "./ui/OutlineButton.jsx";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer__row">
                    <Logo variant="dark"/>

                    <div className="footer__wrap">
                        <nav className="footer__nav">
                            <ul>
                                <li><a href="#">Про нас</a></li>
                                <li><a href="#">Послуги та ціни</a></li>
                                <li><a href="#">Фотоальбом</a></li>
                                <li><a href="#">Контакти</a></li>
                            </ul>
                        </nav>

                        <OutlineButton link="#form">Замовити дзвінок</OutlineButton>
                    </div>
                </div>

                <div className="footer__desc">
                    <a href="#" className="footer__desc-link">Угода на обробку персональних даних</a>
                    <a href="#" className="footer__desc-link">Політика конфіденційності</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;