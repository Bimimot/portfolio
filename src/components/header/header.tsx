
import { FC, PropsWithChildren, useContext } from 'react';
import { HeaderContext } from '../../data/headerContext';
import { HeaderPoint } from './';

export const Header: FC<PropsWithChildren> = (props) => {
    const { state } = useContext(HeaderContext);
    const homePoint = state.find(item => item.link === "#home");
    const navList = state.filter(item => item.link !== "#home")

    return (
        <div className='header border'>
            <nav className='header__nav'>
                {homePoint && <HeaderPoint item={homePoint} />}

                {navList.map((item, i) => <HeaderPoint item={item} key={i} />)}
            </nav>
            {props.children}
        </div>
    )
}