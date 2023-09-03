import React, {useEffect, useRef, useState} from "react"
import DetailsHeader from "./DetailsHeader.jsx";
import DetailsBody from "./DetailsBody.jsx";

const Details = ({children}) => {
    const [active, setActive] = useState(false);
    const $bodyDetailsRef = useRef(null);
    const $detailsRef = useRef(null);

    return (
        <div ref={$detailsRef} className={`details ${active ? "active" : ""}`}
             style={{paddingBottom: active ? ($bodyDetailsRef.current.offsetHeight + (parseInt(getComputedStyle($bodyDetailsRef.current).paddingTop) * 2) + "px") : ""}}>
            <DetailsHeader isActive={active} onClick={()=> setActive(prev => !prev)}/>
            <DetailsBody ref={$bodyDetailsRef}>{children}</DetailsBody>
        </div>
    );
};

export default Details;