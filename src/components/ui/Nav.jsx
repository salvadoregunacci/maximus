import React from "react"

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="active">
                    <a href="#">Про нас</a>
                </li>
                <li>
                    <a href="#">Послуги та ціни</a>
                </li>
                <li>
                    <a href="#">Фотоальбом</a>
                </li>
                <li>
                    <a href="#">Контакти</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;