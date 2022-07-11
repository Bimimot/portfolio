import { FC, ReactNode, useEffect, useRef, useContext, useState } from 'react';
import { HeaderContext } from '../../data/headerContext';
import onScreen from '../../helpers/useOnScreen';

export const ContentContainer: FC<{ children: ReactNode, id: string }>
    = (props) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const { dispatch } = useContext(HeaderContext)
        const onScreenPart = onScreen({ ref: containerRef });
        const [prevOnScreenPart, setPrevOnScreenPart] = useState<number>(0);

        useEffect(() => {
            if (onScreenPart > .5 && onScreenPart > prevOnScreenPart) {
                dispatch(`#${props.id}`);
            };
            setPrevOnScreenPart(onScreenPart);
        }, [onScreenPart, prevOnScreenPart, props.id, dispatch]);

        return (
            <article className='section-border content-block' ref={containerRef}>
                <span className="anchor" id={props.id}></span>
                {props.children}
            </article>
        )
    }

