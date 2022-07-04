import { useReducer } from 'react';
import styles from './app.module.scss';
import { Header } from '../header/header';
import { Slider } from '../slider/slider';
import { Footer } from '../footer/footer';
import { ContentContainer } from '../content-container/ContentContainer';
import { HeaderContext, initialHeaderState, reducer } from '../../data/headerContext';
import StyleTheme from '../../helpers/StyleTheme';

const styleTheme = new StyleTheme("DARK");

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initialHeaderState);

    return (
        <HeaderContext.Provider value={{state, dispatch}}>
            <div className={styles.page}>
                <Header>
                    <Slider isOn={styleTheme.currentTheme === "DARK"}
                        callback={(mode: boolean) => styleTheme.setTheme(mode ? "DARK" : "LIGHT")}
                    />
                </Header >
                <ContentContainer>
                    <span id="home">ME ME ME</span>
                </ContentContainer>
                <ContentContainer>
                    <span id="about">About</span>
                </ContentContainer>

                <ContentContainer>
                    <span id="projects">Projects</span>
                </ContentContainer>
                <Footer />
            </div>
        </HeaderContext.Provider>
    )
}

