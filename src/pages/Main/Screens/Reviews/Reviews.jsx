import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Keyboard} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./styles.scss";
import Details from "../../../../components/ui/Details/Details.jsx";
import PersonCard from "../../../../components/ui/PersonCard.jsx";
import Rating from "../../../../components/ui/Rating/Rating.jsx";
import RatingItem from "../../../../components/ui/Rating/RatingItem.jsx";

const Reviews = () => {
    const reviews = [
        {
            author: {
                firstname: "Максим",
                lastname: "Іванов"
            },
            body: "Фантастичний кінний клуб! Завжди мріяв покататися верхи на коні, і тут знайшов свою можливість. Дуже професійні і дружні інструктори.",
            avatar: "/images/pages/main/reviews/author_1.webp",
            instagramUrlAuthor: "#",
            facebookUrlAuthor: "#",
            rating: {
                all: 5,
                emotion: 4,
                price: 5
            }
        },
        {
            author: {
                firstname: "Анастасія",
                lastname: "Литвин"
            },
            body: "Раджу кожному спробувати! Заняття верховою їздою в кінному клубі - це неймовірний спосіб розслабитися та отримати масу задоволення. Дякую клубу за незабутні емоції!",
            avatar: "/images/pages/main/reviews/author_2.webp",
            instagramUrlAuthor: "#",
            facebookUrlAuthor: "#",
            rating: {
                all: 5,
                emotion: 5,
                price: 5
            }
        },
        {
            author: {
                firstname: "Олександра",
                lastname: "Петренко"
            },
            body: "Кінний клуб \"Максимус\" - моє улюблене місце для відпочинку. Відмінні коні, ввічливий персонал та відмінна атмосфера. Рекомендую всім!",
            avatar: "/images/pages/main/reviews/author_3.webp",
            instagramUrlAuthor: "#",
            facebookUrlAuthor: "#",
            rating: {
                all: 5,
                emotion: 5,
                price: 4
            }
        },
        {
            author: {
                firstname: "Денис",
                lastname: "Мельник"
            },
            body: "Прекрасний клуб для початківців та досвідчених вершників. Вивчив багато нового та покращив свої навички. Чудові тренери та привітні коні.",
            avatar: "/images/pages/main/reviews/author_4.webp",
            instagramUrlAuthor: "#",
            facebookUrlAuthor: "#",
            rating: {
                all: 5,
                emotion: 5,
                price: 4
            }
        },
        {
            author: {
                firstname: "Михайло",
                lastname: "Сидоренко"
            },
            body: "Неймовірні враження від кінного клубу \"Максимус\". Першокласні уроки верхової їзди, привітний персонал та гарні умови для тренувань. Обов'язково прийду ще!",
            avatar: "/images/pages/main/reviews/author_5.webp",
            instagramUrlAuthor: "#",
            facebookUrlAuthor: "#",
            rating: {
                all: 5,
                emotion: 5,
                price: 5
            }
        },
        {
            author: {
                firstname: "Юлія",
                lastname: "Гринь"
            },
            body: "Давно мріяла покататися на коні, і завдяки кінному клубу \"Максимус\" моя мрія здійснилася. Відмінний вибір для тих, хто хоче зануритися в світ верхової їзди.",
            avatar: "/images/pages/main/reviews/author_6.webp",
            instagramUrlAuthor: "#",
            facebookUrlAuthor: "#",
            rating: {
                all: 5,
                emotion: 4,
                price: 5
            }
        },
    ]
    return (
        <section id="reviews">
            <div className="container">
                <h2 className="title_section">Що про нас говорять клієнти</h2>
            </div>

            <div className="slider slider_reviews">
                <Swiper
                    spaceBetween={30}
                    keyboard
                    modules={[Navigation, Pagination, Keyboard]}
                    navigation={{
                        nextEl: ".slider_reviews .slider__nav-next", prevEl: ".slider_reviews .slider__nav-prev"
                    }}
                    pagination={{
                        el: ".slider_reviews .slider__pagination", clickable: true,
                    }}
                    slidesPerView={4}
                    centeredSlides={true}
                    initialSlide={2}
                >
                    {
                        reviews.length ?
                            reviews.map((item, key) => (
                                <SwiperSlide key={key}>
                                    <div className="reviews__card">
                                        <div className="reviews__card-body">{item.body}</div>
                                        <Details>
                                           <Rating>
                                               <RatingItem grade={item.rating.emotion}>Емоції</RatingItem>
                                               <RatingItem grade={item.rating.price}>Ціна</RatingItem>
                                               <RatingItem grade={item.rating.all}>Загалом</RatingItem>
                                           </Rating>
                                        </Details>
                                        <div className="reviews__card-wrap">
                                            <PersonCard
                                                author={item.author}
                                                avatar={item.avatar}
                                                instagramUrl={item.instagramUrlAuthor}
                                                facebookUrl={item.facebookUrlAuthor}
                                            />
                                            <img className="reviews__card-quote" src="/images/ui/quote.svg"
                                                 alt="quote"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                            : <div>Немає відгуків</div>
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
        </section>
    );
};

export default Reviews;