import React from "react";
import "./styles.scss";
import Button from "../../../../components/ui/Button.jsx";

const Services = () => {
    const cards = [
        {
            title: "Уроки верхової їзди",
            desc: "Уроки професійної верхової їзди для любителів та початківців",
            img: "/images/pages/main/services/cards/img_1.webp",
            link: "#"
        },
        {
            title: "Прогулянки верхи з тренером",
            desc: "Тренування клієнтів, підготовка до занять кінним спортом на професійному рівні під керівництвом досвідчених тенерів",
            img: "/images/pages/main/services/cards/img_2.webp",
            link: "#"
        },
        {
            title: "Фотосесії",
            desc: "Готові фото-зони, декорації та костюми для найкращих моментів",
            img: "/images/pages/main/services/cards/img_3.webp",
            link: "#"
        },
        {
            title: "Подорожі верхи",
            desc: "Навчання техніки безпечної їзди на відкритій місцевості, а також організація верхових подорожей та прогулянок",
            img: "/images/pages/main/services/cards/img_4.webp",
            link: "#"
        },
        {
            title: "Дресирування",
            desc: "Заняття з навчання коней різним трюкам і командам",
            img: "/images/pages/main/services/cards/img_5.webp",
            link: "#"
        },
        {
            title: "Догляд за кіньми",
            desc: "Навчання догляду за кіньми, включаючи годування, напування, прибирання та підтримання загального здоров'я тварин",
            img: "/images/pages/main/services/cards/img_6.webp",
            link: "#"
        },
    ];
    return (
        <section id="services">
            <div className="container">
                <h2 className="title_section">Напрямки клубу</h2>
                <div className="subtitle_section">Наші послуги</div>
            </div>

            <div className="services__content">
                <img src="/images/pages/main/promo/cloud.webp" alt="cloud" className="services__content-cloud"/>
                <img src="/images/pages/main/services/horse_left.webp" alt="horse" className="services__content-horse_left"/>
                <img src="/images/pages/main/services/horse_right.webp" alt="horse" className="services__content-horse_right"/>

                <div className="container">
                    <div className="services__cards">
                        {
                            cards.length ?
                                cards.map((item, key) => (
                                    <a key={key} href={item.link} className="services__card">
                                        <span className="services__card-content">
                                            <span className="services__card-img">
                                                <img src={item.img} alt="horse"/>
                                            </span>
                                            <span className="services__card-title">{item.title}</span>
                                            <span className="services__card-desc">{item.desc}</span>
                                        </span>
                                    </a>
                                ))
                                : <div>Карточек нет</div>
                        }
                    </div>
                    <Button link="#" className="services__btn">Записатись</Button>
                </div>
            </div>
        </section>
    );
};

export default Services;