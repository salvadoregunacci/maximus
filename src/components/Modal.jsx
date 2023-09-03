import React, {useEffect, useRef, useState, forwardRef} from "react"
import Loader from "./ui/Loader.jsx";

const Modal = forwardRef(({children, isOpen, keyClose = true, overClose = true, onCloseCallback, className}, ref) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    function onCloseModal() {
        if (onCloseCallback) {
            onCloseCallback();
        }

        setIsVisible(false);
        document.removeEventListener("keydown", onKeyDown);
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", onKeyDown);
        }
    }, [isOpen]);

    function onKeyDown(e) {
        if (e.code === "Escape" && keyClose) {
            onCloseModal();
        }
    }

    function onClickModal(e) {
        if (!overClose) return;

        const _el = e.target;

        if (_el && _el.classList.contains("modal")) {
            onCloseModal();
        }
    }

    return (
        <div
            className={`modal ${isVisible ? "active" : ""} ${className ? className : ""}`}
            role="modal"
            aria-hidden="true"
            onClick={onClickModal}
        >
            <button onClick={onCloseModal} className="modal__close_btn" aria-label="close">✕</button>
            <div className="modal__content" ref={ref ? ref : ""}>
                {children}
            </div>

            <Loader/>
        </div>
    );
});

export default Modal;