import React from "react";
import "./styles.scss";

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="title_section">Про наш клуб</h2>

                <div className="about__wrap">
                    <div className="about__img">
                        <img src="/images/pages/main/about/bg.webp" alt="horse"/>
                    </div>
                    <div className="about__content">
                        <div className="about__content-wrap">
                            <div className="about__content-block">
                                <div className="count_block">
                                    <div className="count_block-title">1100+</div>
                                    <div className="count_block-txt">Задоволених відвідувачів за останній рік</div>
                                </div>
                            </div>
                            <div className="about__content-block">
                                <div className="count_block">
                                    <div className="count_block-title">50+</div>
                                    <div className="count_block-txt">Проведених заходів за 6 місяців</div>
                                </div>
                            </div>
                            <div className="about__content-block">
                                <div className="count_block">
                                    <div className="count_block-title">20+</div>
                                    <div className="count_block-txt">Випущених професійних спортсменів за 1 рік
                                    </div>
                                </div>
                            </div>
                            <div className="about__content-block">
                                <div className="count_block">
                                    <div className="count_block-title">15+</div>
                                    <div className="count_block-txt">Регулярних занять на тиждень з професійними
                                                                     наставниками
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="about__content-text">
                            Заняття проводяться індивідуально та в групах, вартість також залежатиме від ваших
                            навичок та вмінь. Більш вигідні умови призначені для регулярних занять при покупці
                            абонементів. Для тих, хто хоче відточити свою майстерність, розроблені програми по
                            спеціалізації (конкур, виїздка та інші), участь у змаганнях та чемпіонатах. Для самих
                            маленьких любителів коней діють поні-клуби, де хлопці вчаться доглядати тварин і
                            їздити на милий і добрий поні.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;