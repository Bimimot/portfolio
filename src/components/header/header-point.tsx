import { FC, memo } from 'react';
import { THeaderPoint } from '../../types/';
import { HeaderIcon } from './header-icon';

export const HeaderPoint: FC<{ item: THeaderPoint }> =
    memo((props: { item: THeaderPoint }) => {
        const { item: { link, icon, active, text } } = props;

        const classStyle = `header__point ${active ? 'header__point_active_on' : ''}`;

        return (
            <a href={link} className={classStyle}        >
                <HeaderIcon icon={icon} active={active} />
                {text}
            </a>
        )
    }
    )