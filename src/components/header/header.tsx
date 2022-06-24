
import { FC, PropsWithChildren } from 'react';
import { THeaderPoint } from './proptypes';
import { HeaderPoint } from './header-point';
import styles from './header.module.scss';

const headerList: THeaderPoint[] = [
    { text: "About", link: "#about" },
    { text: "Projects", link: "#projects" },
    { text: "Contacts", link: "#contacts" },
];

export const Header: FC<PropsWithChildren> = (props) => {

    return (
        <div className={`${styles.header} border`}>
            <nav className={styles.header__nav}>
                {headerList.map(item => <HeaderPoint item={item} />)}
            </nav>

            {props.children}
        </div>
    )
}