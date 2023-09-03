import React, {useState} from "react"

const CheckBox = ({name = "", id = "", children}) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                name={name}
                id={id}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={id}>{children}</label>
        </div>
    );
};

export default CheckBox;