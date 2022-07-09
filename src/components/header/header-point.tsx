import { FC, memo, useContext } from 'react';
import { THeaderPoint } from '../../types/';
import { HeaderIcon } from './header-icon';
import { HeaderContext } from '../../data/headerContext';

export const HeaderPoint: FC<{ item: THeaderPoint }> =
    memo((props: { item: THeaderPoint }) => {
        const { dispatch } = useContext(HeaderContext);
        const { item: { link, icon, active, text } } = props;

        const classStyle = `header__point ${active ? 'header__point_active_on' : ''}`;

        return (
            <a href={link}
                className={classStyle}
                onClick={() => !active ? dispatch(link) : null}>
                <HeaderIcon icon={icon} active={active} />
                {text}
            </a>
        )
    }
    )