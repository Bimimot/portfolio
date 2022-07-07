import React, { FC, ReactNode, useEffect, useRef, useContext } from 'react';
import { HeaderContext } from '../../data/headerContext';
import useOnScreen from '../../helpers/useOnScreen';

export const ContentContainer: FC<{ children: ReactNode, id: string }>
    = (props) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const { dispatch } = useContext(HeaderContext);
        const isOnScreen = useOnScreen({ ref: containerRef, once: false });

        useEffect(() => {
            if (isOnScreen) {
                dispatch({ type: `#${props.id}` })
            }
        }, [isOnScreen, dispatch, props.id]);

        return (
            <div className='border content-block' ref={containerRef}>
                <span className="anchor" id={props.id}></span>
                {props.children}
            </div>
        )
    }

