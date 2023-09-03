import React from "react"

const OutlineButton = ({link = null, children}) => {
    return (
        <>
            {
                link ?
                    <a href={link} className="btn-outline">{children}</a>
                    :
                    <button className="btn-outline">{children}</button>
            }
        </>

    );
};

export default OutlineButton;