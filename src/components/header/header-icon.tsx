import { FC, useMemo } from "react";
import { TIconHeader } from '../../types/';

export const HeaderIcon: FC<{ icon?: TIconHeader, active?: boolean }> = (props) => {
    const { icon = null, active = false } = props;
    const classStyle = useMemo(() => active ? `icon-${icon} icon-${icon}_active_on` : `icon-${icon}`,
        [icon, active]);

    return (icon ? <span className={classStyle}> </span> : null)
}