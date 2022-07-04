import { FC, memo, useContext } from 'react';
import { THeaderPoint } from '../../types/';
import styles from './header.module.scss';
import { HeaderIcon } from './header-icon';
import { HeaderContext } from '../../data/headerContext';

export const HeaderPoint: FC<{ item: THeaderPoint }> =
    memo((props: { item: THeaderPoint }) => {
        const { dispatch } = useContext(HeaderContext);
        const { item: { link, icon, active, text } } = props;


        const classStyle = `${styles.header__point} ${active ? styles.header__point_active_on : ''}`;

        return (
            <a href={link}
                className={classStyle}
                onClick={() => !active ? dispatch({ type: link }) : null}>
                <HeaderIcon icon={icon} active={active} />
                {text}
            </a>
        )
    }
    )