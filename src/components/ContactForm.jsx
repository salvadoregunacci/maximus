import React from "react"
import SocialLinks from "./SocialLinks.jsx";

const ContactForm = () => {
    return (
        <div className="contact_form">
            <h2 className="title_section">Контакти</h2>
            <div className="contact_form__hr"></div>

            <div className="contact_form__items">
                <div className="contact_form__item">
                    <div className="contact_form__item-img">
                        <img src="/images/ui/location.svg" alt="location"/>
                    </div>
                    <div className="contact_form__item-title">вул.Миколи Хвильового, 15</div>
                </div>
                <a href="tel:380410926118" target="_blank" className="contact_form__item">
                    <div className="contact_form__item-img">
                        <img src="/images/ui/phone_yellow.svg" alt="phone"/>
                    </div>
                    <div className="contact_form__item-title">+38 (0410) 926 118</div>
                </a>
                <a href="mailto:maximus@gmail.com" target="_blank" className="contact_form__item">
                    <div className="contact_form__item-img">
                        <img src="/images/ui/mail.svg" alt="mail"/>
                    </div>
                    <div className="contact_form__item-title">maximus@gmail.com</div>
                </a>
                <div className="contact_form__item">
                    <div className="contact_form__item-img">
                        <img src="/images/ui/clock.svg" alt="clock"/>
                    </div>
                    <div className="contact_form__item-title">
                        <span>Пн-Пт: 10:00 - 19:00</span>
                        <span>Сб: 10:00 - 17:00 </span>
                        <span>Нд: вихідний</span>
                    </div>
                </div>
            </div>

            <SocialLinks/>
        </div>
    );
};

export default ContactForm;