import React, {useRef, useState} from "react";
import "./styles.scss";
import Modal from "../../../../components/Modal.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';

const Visitors = () => {
    const [openModal, setOpenModal] = useState(false);
    const $visitorsModal = useRef(null);

    const imagesSlide_1 = [];
    const imagesSlide_2 = [];
    const imagesSlide_3 = [];

    for (let i = 1; i <= 8; i++) {
        imagesSlide_1.push(`/images/pages/main/visitors/slide_1/thumb/img_${i}.webp`);
    }

    for (let i = 1; i <= 8; i++) {
        imagesSlide_2.push(`/images/pages/main/visitors/slide_2/thumb/img_${i}.webp`);
    }

    function closeScaleModal() {
        $visitorsModal.current.innerHTML = "";
        setOpenModal(false);
    }

    function onOpenFullImg(e) {
        const el = e.target;

        const src = el.src;
        const imageName = src.split('/').pop();
        const partBefore = src.slice(0, src.indexOf("/thumb"));

        if (el) {
            $visitorsModal.current.insertAdjacentHTML("beforeend", `<img class="modal__full_img" src="${partBefore + "/full/lg/" + imageName}" alt="full image" />`);
            setOpenModal(true);
        }
    }

    return (
        <section id="visitors">
            <div className="container">
                <h2 className="title_section">Наші відвідувачі</h2>
            </div>

            <div className="slider viitors__slider">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".viitors__slider .slider__nav-next",
                        prevEl: ".viitors__slider .slider__nav-prev"
                    }}
                    pagination={{
                        el: ".viitors__slider .slider__pagination",
                        clickable: true,
                    }}
                    className="visitors__slider"
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className="visitors__gallery">
                            {
                                imagesSlide_1.map((item, key) => (
                                    <div key={key} className="scale_img">
                                        <img
                                            onClick={onOpenFullImg}
                                            src={`/images/pages/main/visitors/slide_1/thumb/img_${key + 1}.webp`}
                                            alt="visitor"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="visitors__gallery">
                            {
                                imagesSlide_2.map((item, key) => (
                                    <div key={key} className="scale_img">
                                        <img
                                            onClick={onOpenFullImg}
                                            src={`/images/pages/main/visitors/slide_2/thumb/img_${key + 1}.webp`}
                                            alt="visitor"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="slider__nav">
                    <div className="slider__nav-wrap">
                        <img src="/images/ui/arrow_fill.svg" alt="arrow fill" className="slider__nav-arrow slider__nav-prev"/>
                        <div className="slider__pagination"></div>
                        <img src="/images/ui/arrow_fill.svg" alt="arrow fill" className="slider__nav-arrow slider__nav-next"/>
                    </div>
                </div>
            </div>

            <Modal ref={$visitorsModal} isOpen={openModal} onCloseCallback={closeScaleModal}></Modal>
        </section>
    );
};

export default Visitors;