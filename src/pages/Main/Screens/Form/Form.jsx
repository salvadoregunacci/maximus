import React from "react"
import QuestionForm from "../../../../components/QuestionForm.jsx";
import "./styles.scss";

const Form = () => {
    return (
        <section id="form">
            <div className="container">
                <img className="form__tree" src="/images/pages/main/form/bush.webp" alt="bush"/>
                <QuestionForm/>
            </div>
        </section>
    );
};

export default Form;