import { useReducer } from 'react';
import { Header } from '../header/header';
import { Me } from '../me/me-block';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contacts } from '../contacts/contacts';
import { ContentContainer } from '../content-container/ContentContainer';
import { HeaderContext, initialHeaderState, headerReducer } from '../../data/headerContext';


export const App = () => {
    const [state, dispatch] = useReducer(headerReducer, initialHeaderState);

    const arrComponents = [
        { component: <Me />, id: "home" },
        { component: <About />, id: "about" },
        { component: <Projects />, id: "projects" },
        { component: <Contacts />, id: "contacts" }
    ];

    return (
        <HeaderContext.Provider value={{ state, dispatch }}>
            <div className="page">
                <Header />
                {arrComponents.map(item =>
                    <ContentContainer id={item.id} key={item.id}>
                        {item.component}
                    </ContentContainer>)}
            </div>
        </HeaderContext.Provider>
    )
}

