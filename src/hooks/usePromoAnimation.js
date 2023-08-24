import {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';

function usePromoAnimation($promoSectionRef, $birdsImgRef, $treesImgRef, $horseSmImgRef, $horseLgImgRef, $cloudImgRef, $bushImgRefs) {
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if ($birdsImgRef) {
            gsap.fromTo($birdsImgRef.current, {
                scale: 0,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)"
            })
        }

        if ($treesImgRef) {
            gsap.fromTo($treesImgRef.current, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5
            });
        }

        if ($horseSmImgRef) {
            gsap.fromTo($horseSmImgRef.current, {
                opacity: 0,
                x: 60
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5
            });
        }

        if ($horseLgImgRef) {
            gsap.fromTo($horseLgImgRef.current, {
                opacity: 0,
                x: -60
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                onComplete: () => setIsComplete(true)
            });
        }

        if ($cloudImgRef) {
            gsap.fromTo($cloudImgRef.current, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "back.out(1.7)"
            });
        }

        if ($bushImgRefs.current.length) {
            gsap.fromTo($bushImgRefs.current[0], {
                opacity: 0,
                xPercent: -100
            }, {
                opacity: 1,
                xPercent: 0,
                duration: 1,
                ease: "power2.out"
            });

            gsap.fromTo($bushImgRefs.current[1], {
                opacity: 0,
                xPercent: 100
            }, {
                opacity: 1,
                xPercent: 0,
                duration: 1,
                ease: "power2.out"
            })
        }
    }, [$birdsImgRef, $treesImgRef, $horseSmImgRef, $horseLgImgRef, $cloudImgRef, $bushImgRefs]);

    useEffect(() => {
        if (isComplete && $promoSectionRef) {
            $promoSectionRef.current.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                let moveX = (mouseX - centerX) * 0.02;
                let moveY = (mouseY - centerY) * 0.02;

                gsap.to($horseLgImgRef.current, {
                    x: moveX,
                    y: moveY,
                    ease: 'power2.out'
                });

                moveX = (mouseX - centerX) * 0.004;
                moveY = (mouseY - centerY) * 0.004;

                gsap.to($birdsImgRef.current, {
                    x: moveX,
                    y: moveY,
                    ease: "back.out(1.7)"
                });

                gsap.to($cloudImgRef.current, {
                    x: moveX,
                    y: moveY,
                    ease: "back.out(1.7)"
                });
            });

            $promoSectionRef.current.addEventListener('mouseleave', (e) => {
                gsap.to($horseLgImgRef.current, {
                    x: 0,
                    y: 0,
                    ease: 'none'
                });
            });
        }
    }, [isComplete]);
}

export default usePromoAnimation;