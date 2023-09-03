import React from "react";
import "./styles.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Keyboard} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Horses = () => {
    const horses = [
        {
            img: "/images/pages/main/horses/img_1.webp",
            name: "Жазель",
            desc: "Енергійний скакун з блискучою маневреністю та витонченою ходою, що ідеально підходить для високошвидкісних треків"
        },
        {
            img: "/images/pages/main/horses/img_2.webp",
            name: "Юджин",
            desc: "Чарівний стрибун з вражаючою висотою стрибка та граціозними рухами, що підходить для стрибкових змагань"
        },
        {
            img: "/images/pages/main/horses/img_3.webp",
            name: "Меліса",
            desc: "Універсальний кінь з прекрасною рівновагою між швидкістю і силою, що підходить як для спортивних заходів, так і для повсякденних завдань"
        },
        {
            img: "/images/pages/main/horses/img_4.webp",
            name: "Циан",
            desc: "Могутній великоваговий кінь з надійним темпераментом, ідеальний для важких вантажоперевезень та сільськогосподарських робіт"
        },
        {
            img: "/images/pages/main/horses/img_5.webp",
            name: "Хесана",
            desc: "Доброзичливий і надійний кінь з поступливим характером, ідеальний для роботи з дітьми і вершниками-початківцями"
        },
        {
            img: "/images/pages/main/horses/img_6.webp",
            name: "Спринтер",
            desc: "Ідеально підходить для їзди на високій швидкості, має потужні задні ноги та виняткову витривалість"
        },
        {
            img: "/images/pages/main/horses/img_7.webp",
            name: "Стежка",
            desc: "Має велику витривалість і легко справляється з нерівними дорогами та гірськими маршрутами"
        },
        {
            img: "/images/pages/main/horses/img_8.webp",
            name: "Вітер",
            desc: "Здатний розвинути вражаючу швидкість на відкритих просторах, завдяки своїм потужним легким і спритності"
        },
        {
            img: "/images/pages/main/horses/img_9.webp",
            name: "Товариш",
            desc: "Вірний і розуміючий, завжди готовий до спільних виїздів і має природню здатність зберігати спокій у складних ситуаціях"
        },
        {
            img: "/images/pages/main/horses/img_10.webp",
            name: "Робін",
            desc: "З винятковим зором і спритними рухами, цей кінь ідеально підходить для складних трюків та вправності на перешкодах"
        }
    ]
    return (<section id="horses">
        <div className="container">
            <h2 className="title_section">Наші коні</h2>
        </div>
        <div className="slider horses__slider">
            <Swiper
                spaceBetween={30}
                keyboard
                modules={[Navigation, Pagination, Keyboard]}
                navigation={{
                    nextEl: ".horses__slider .slider__nav-next", prevEl: ".horses__slider .slider__nav-prev"
                }}
                pagination={{
                    el: ".horses__slider .slider__pagination", clickable: true,
                }}
                slidesPerView={5}
                centeredSlides={true}
                initialSlide={2}
            >
                {
                    horses.length ?
                        horses.map((item, key) => (
                            <SwiperSlide key={key}>
                                <div className="horses__card">
                                    <div className="horses__card-img">
                                        <img src={item.img} alt="horse"/></div>
                                    <div className="horses__card-title">
                                        {item.name}
                                    </div>
                                    <div className="horses__card-info">
                                        {item.desc}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        : "Немає слайдів"
                }
            </Swiper>

            <div className="slider__nav">
                <div className="slider__nav-wrap">
                    <img src="/images/ui/arrow_fill.svg" alt="arrow fill"
                         className="slider__nav-arrow slider__nav-prev"/>
                    <div className="slider__pagination"></div>
                    <img src="/images/ui/arrow_fill.svg" alt="arrow fill"
                         className="slider__nav-arrow slider__nav-next"/>
                </div>
            </div>
        </div>
    </section>);
};

export default Horses;