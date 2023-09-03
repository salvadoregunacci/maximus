import React from "react"

const Button = ({link = null, children, className, type = "button"}) => {
    return (
        <>
            {
                link ?
                    <a className={`btn ${className}`} href={link}>{children}</a>
                    :
                    <button type={type} className={`btn ${className}`}>{children}</button>
            }
        </>
    );
};

export default Button;