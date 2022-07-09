import { FC, ReactNode, useEffect, useRef, useContext } from 'react';
import { HeaderContext } from '../../data/headerContext';
import onScreen from '../../helpers/useOnScreen';

export const ContentContainer: FC<{ children: ReactNode, id: string }>
    = (props) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const { dispatch } = useContext(HeaderContext)
        const onScreenPart = onScreen({ ref: containerRef });

        useEffect(() => {
            if (onScreenPart > .5) {
                dispatch(`#${props.id}`);
            };
        }, [onScreenPart, props.id, dispatch]);

        return (
            <div className='border content-block' ref={containerRef}>
                <span className="anchor" id={props.id}></span>
                {props.children}
            </div>
        )
    }

