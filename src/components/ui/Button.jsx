import React from "react"

const Button = ({link = null, children, className}) => {
    return (
        <>
            {
                link ?
                    <a  className={`btn ${className}`} href={link}>{children}</a>
                    :
                    <button className={`btn ${className}`} >{children}</button>
            }
        </>
    );
};

export default Button;