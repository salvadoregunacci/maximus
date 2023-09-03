import React from "react"

const DetailsHeader = ({isActive, className, ...props}) => {
    return (
        <div className={`details__header ${className ? className : ""}`} {...props}>
            <span>{isActive ? "Згорнути" : "Детальніше"}</span>
            <img src="/images/ui/green_chevron.svg" alt="arrow green"/>
        </div>
    );
};

export default DetailsHeader;