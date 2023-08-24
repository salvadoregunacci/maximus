import React from "react"

const Logo = ({variant = "default"}) => {
    return (
        <a href="/" className="logo">
            {
                variant === "dark" ?
                    <img src="/images/logo_dark.svg" alt="logotype Maximus"/>
                    :
                    <img src="/images/logo.svg" alt="logotype Maximus"/>
            }
        </a>
    );
};

export default Logo;