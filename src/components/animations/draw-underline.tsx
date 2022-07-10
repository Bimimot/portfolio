import { FC } from "react";
import useIsMounted from "../../helpers/useIsMounted";

export const DrawUnderline: FC<{ delay?: number }>
    = (props) => {
        const { delay = .2 } = props;
        const isMounted = useIsMounted();

        return (
            isMounted ?
                <span className='underline-draw' style={{ animationDelay: `${delay}s` }}>
                </span>
                : <></>
        )
    }