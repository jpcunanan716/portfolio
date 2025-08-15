import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({ children, className = "", offset = 50, duration = 1000, delay = 0 }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={elementRef}
            className={`transform transition-all ease-out ${className}`}
            style={{
                transform: isVisible ? 'translateY(0px) scale(1)' : `translateY(${offset}px) scale(0.8)`,
                opacity: isVisible ? 1 : 0,
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default ScrollFloat;
