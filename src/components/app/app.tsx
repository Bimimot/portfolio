import { useReducer } from 'react';
import styles from './app.module.scss';
import { Header } from '../header/header';
import { Slider } from '../slider/slider';
import { Me } from '../me/Me';
import { About } from '../about/about';
import { Projects } from '../projects/Projects';
import { Contacts } from '../contacts/contacts';
import { ContentContainer } from '../content-container/ContentContainer';
import { HeaderContext, initialHeaderState, reducer } from '../../data/headerContext';

import StyleTheme from '../../helpers/StyleTheme';

const styleTheme = new StyleTheme("DARK");

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initialHeaderState);
    const arrComponents = [
        { component: <Me />, id: "home" },
        { component: <About />, id: "about" },
        { component: <Projects />, id: "projects" },
        { component: <Contacts />, id: "contacts" }
    ]

    return (
        <HeaderContext.Provider value={{ state, dispatch }}>
            <div className={styles.page}>
                <Header>
                    <Slider isOn={styleTheme.currentTheme === "DARK"}
                        callback={(mode: boolean) => styleTheme.setTheme(mode ? "DARK" : "LIGHT")}
                    />
                </Header >
                {arrComponents.map(item =>
                    <ContentContainer id={item.id} key={item.id}>
                        {item.component}
                    </ContentContainer>)}
            </div>
        </HeaderContext.Provider>
    )
}

