import { FC } from 'react';
import { THeaderPoint } from './proptypes';
import styles from './header.module.scss';

export const HeaderPoint: FC<{item: THeaderPoint}> = (props) => {
    const { item } = props;    

    return (
        <a href={item.link} className={styles.header__point}>
            {item.text}
        </a>
    )
}