import React, {forwardRef, useState} from "react"

const Field = forwardRef((
    {
        name,
        isError = false,
        helperText = "",
        onlyLetters = false,
        onlyNumbers = false,
        placeholder = "",
        ...props
    }, ref) => {

    const [value, setValue] = useState("");

    function onInputHandler(e) {
        let _val = e.target.value;

        if (onlyNumbers) {
            setValue(_val.replace(/[^0-9]/gm, ""))
        }

        if (onlyLetters) {
            setValue(_val.replace(/[^A-zА-я]/gm, ""))
        }
    }

    return (
        <div className="field">
            <input
                name={name}
                ref={ref}
                type="text"
                placeholder={placeholder}
                onInput={onInputHandler}
                value={value}
                {...props}
            />
            <div className="field__err">{helperText}</div>
        </div>
    );
});

export default Field;