import React, { useEffect, useState, useRef, RefObject } from 'react';

export default function useOnScreen(data: { ref: RefObject<HTMLElement> | null, once: boolean }) {
    const { ref, once } = data;
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [isOnScreen, setIsOnScreen] = useState(false);


    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio === 1 ) {
                    setIsOnScreen(true);
                    if (ref && ref.current && observerRef && observerRef.current && once) {
                        observerRef.current.unobserve(ref.current)
                    }
                } else {
                    setIsOnScreen(false);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 1
            }
        );
    }, []);

    useEffect(() => {
        if (observerRef && observerRef.current && ref && ref.current) {
            observerRef.current.observe(ref.current);

            return () => {
                observerRef.current!.disconnect();
            };
        } else {
            setIsOnScreen(false)
        }
    }, [ref]);

    return isOnScreen;
}
