import { useEffect, useState, useRef } from "react";

export const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px'
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Stop observing once it's visible to save resources
                observer.unobserve(element);
            }
        }, { threshold, rootMargin });

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold, rootMargin]); // Re-run if options change

    return { ref, isVisible };
};