import React from "react"
import "./styles.scss";
import ContactForm from "../../../../components/ContactForm.jsx";

const Contacts = () => {
    return (
        <section id="contacts">
            <img className="contacts__bush contacts__bush_right" src="/images/pages/main/contacts/bush_right.webp" alt="bush"/>
            <img className="contacts__bush contacts__bush_left" src="/images/pages/main/contacts/bush_left.webp" alt="bush"/>

            <div className="container">
                <ContactForm/>
            </div>
        </section>
    );
};

export default Contacts;