import React from "react";
import "./styles.scss";

const Benefits = () => {
    return (
        <section id="benefits">
            <div className="container">
                <h2 className="title_section">Чому обирають нас</h2>
                <div className="subtitle_section">Наші переваги</div>

                <div className="benefits__items">
                    <div className="benefits__item">
                        <div className="benefits__item-img">
                            <img src="/images/pages/main/benefits/img_1.webp" alt="map"/>
                        </div>
                        <div className="benefits__item-title">Зручне розташування</div>
                        <div className="benefits__item-text">
                            Ми знаходимося недалеко
                            від автостанції «Східний» щоб вам було зручно добиратися
                        </div>
                    </div>
                    <div className="benefits__item">
                        <div className="benefits__item-img">
                            <img src="/images/pages/main/benefits/img_2.webp" alt="table"/>
                        </div>
                        <div className="benefits__item-title">Обідня зона</div>
                        <div className="benefits__item-text">
                            Є їдальня, щоб Ви могли перекусити та трохи відпочити. Безкоштовно чай, кава,
                            печінки.
                        </div>
                    </div>
                    <div className="benefits__item">
                        <div className="benefits__item-img">
                            <img src="/images/pages/main/benefits/img_3.webp" alt="clock"/>
                        </div>
                        <div className="benefits__item-title">Професійні тренери</div>
                        <div className="benefits__item-text">
                            Наші викладачі мають нагороди у кінному спорті, та відмінні відгуки серед наших учнів
                        </div>
                    </div>
                    <div className="benefits__item">
                        <div className="benefits__item-img">
                            <img src="/images/pages/main/benefits/img_4.webp" alt="car"/>
                        </div>
                        <div className="benefits__item-title">Безкоштовне паркування</div>
                        <div className="benefits__item-text">
                            У нас є просторе паркування, щоб ви могли без проблем припаркувати свій автомобіль
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;