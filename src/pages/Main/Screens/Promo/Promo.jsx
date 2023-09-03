import React, {useEffect, useRef} from "react"
import "./styles.scss";
import usePromoAnimation from "../../../../hooks/usePromoAnimation.js";
import Button from "../../../../components/ui/Button.jsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Promo = () => {
    const $birdsImgRef = useRef(null);
    const $treesImgRef = useRef(null);
    const $horseSmImgRef = useRef(null);
    const $horseLgImgRef = useRef(null);
    const $cloudImgRef = useRef(null);
    const $bushImgRefs = useRef([]);
    const $promoSectionRef = useRef(null);

    usePromoAnimation($promoSectionRef, $birdsImgRef, $treesImgRef, $horseSmImgRef, $horseLgImgRef, $cloudImgRef, $bushImgRefs);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        tl
            .to(".promo__bush_left",
                {
                    scrollTrigger: {
                        scrub: 0.5
                    },
                    y: 400,
                    ease: "power1.out"
                }
            )
            .to(".promo__offer", {
                scrollTrigger: {
                    trigger: ".promo__offer",
                    markers: true,
                    scrub: 1,
                    start: "top-=50px top"
                },
                x: "-100%",
                scale: 0.2,
                opacity: 0.2,
            })
    }, []);

    return (
        <section id="promo" ref={$promoSectionRef}>
            <img src="/images/pages/main/promo/bg.webp" alt="landscape" className="promo__bg"/>
            <img ref={$treesImgRef} src="/images/pages/main/promo/trees.webp" alt="trees" className="promo__trees"/>
            <img src="/images/pages/main/promo/house.webp" alt="house" className="promo__house"/>
            <img ref={$horseSmImgRef} src="/images/pages/main/promo/horse_little.webp" alt="horse"
                 className="promo__horse_little"/>
            <img ref={$birdsImgRef} src="/images/pages/main/promo/birds.webp" alt="birds" className="promo__birds"/>
            <img ref={$horseLgImgRef} src="/images/pages/main/promo/horse_big.webp" alt="horse"
                 className="promo__horse_big"/>
            <img ref={$cloudImgRef} src="/images/pages/main/promo/cloud.webp" alt="cloud" className="promo__cloud"/>

            <img ref={(el) => $bushImgRefs.current[0] = el} src="/images/pages/main/promo/bush_left.webp" alt="bush"
                 className="promo__bush_left"/>
            <img ref={(el) => $bushImgRefs.current[1] = el} src="/images/pages/main/promo/bush_right.webp" alt="bush"
                 className="promo__bush_right"/>

            <div className="container promo__content">
                <div className="promo__offer">
                    <h1 className="promo__offer-title">Пориньте у світ коней разом із нами</h1>
                    <div className="promo__offer-subtitle">
                        <span>Уроки верхової їзди, фотосесії та заходи у приватному кінному клубі <b>м.Київ</b></span>
                    </div>
                    <Button link="#" className="promo__offer-btn">Записатись</Button>
                </div>
            </div>
        </section>
    );
};

export default Promo;