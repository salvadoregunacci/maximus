import React from "react"

const RatingItem = ({grade, isBold, children}) => {
    return (
        <div className="rating__item">
            <div className={`rating__item-title ${isBold ? "rating__item-title_bold" : ""}`}>{children}:</div>
            <div className="rating__item-stars">
                {
                    new Array(5).fill(1).map((_, j) => (
                        j + 1 > grade ?
                            <img key={j} src="/images/ui/star_empty.svg"
                                 alt="star fill"/>
                            :
                            <img key={j} src="/images/ui/star_fill.svg"
                                 alt="star fill"/>
                    ))
                }
            </div>
        </div>
    );
};

export default RatingItem;