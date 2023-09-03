import React, {forwardRef} from "react"

const DetailsBody = forwardRef(({children}, ref) => {
    return (
        <div ref={ref} className="details__body">
            {children}
        </div>
    );
});

export default DetailsBody;