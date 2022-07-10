import { FC, ReactNode } from "react";
import useIsMounted from "../../helpers/useIsMounted";

export const ShowBlock: FC<{ delay?: number, children: ReactNode }>
    = (props) => {
        const { delay = .2, children } = props;
        const isMounted = useIsMounted();

        return (
            isMounted ?
                <div className='block-show'
                    style={{ animationDelay: `${delay}s` }}>
                    {children}
                </div>
                : <></>
        )
    }