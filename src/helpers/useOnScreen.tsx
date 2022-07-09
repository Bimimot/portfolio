import { useEffect, useState, useRef, RefObject } from 'react';

export default function useOnScreen(data: { ref: RefObject<HTMLElement> | null }) {
    const { ref } = data;
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [onScreen, setOnScreen] = useState<number>(0);


    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                setOnScreen(entry.intersectionRatio);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
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
            setOnScreen(0)
        }
    }, [ref]);

    return onScreen;
}
