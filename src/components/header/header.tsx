
import { useContext } from 'react';
import { HeaderContext } from '../../data/headerContext';
import { HeaderPoint } from './';
import { Slider } from '../slider/slider';
import StyleTheme from '../../helpers/StyleTheme';
const styleTheme = new StyleTheme("DARK");

export const Header = () => {
    const { state } = useContext(HeaderContext);
    const homePoint = state.find(item => item.link === "#home");
    const navList = state.filter(item => item.link !== "#home")

    return (
        <div className='header border'>
            <nav className='header__nav'>
                {homePoint && <HeaderPoint item={homePoint} />}
                {navList.map((item, i) => <HeaderPoint item={item} key={i} />)}
            </nav>
            <Slider
                isOn={styleTheme.currentTheme === "DARK"}
                callback={(mode: boolean) => styleTheme.setTheme(mode ? "DARK" : "LIGHT")}
            />
        </div>
    )
}