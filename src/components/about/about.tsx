import { FC, useRef, memo } from "react";
import useOnScreen from "../../helpers/useOnScreen";
import avatarSrc from "../../images/avatar.jpg";

const textsArr = [
    "I've been working efficiently in telecom companies in various positions for 15 years. When I was satisfied my management job less I decided to change my profession.",
    "Programming always attracted me as a field of unlimited opportunities for self - development. In 2019 - 2020 I was studying at Yandex School of Data Analysis.",
    "After successful passing of the graduation project  I  started working as a programmer.My self - organization skills and perseverance to goals have helped me become a part of the professional IT - team.",
    "At outside working and studying hours I like to play the block - flute.Programming and music have a lot of common - a well - written code is like a beautifully played melody."
];

const skillsArr = [
    { title: "Languages", items: "JavaScript, TypeScript, HTML5, CSS/SCSS" },
    { title: "Frameworks", items: "React, React Hooks, Redux, i18n, Express.js" },
    { title: "Testing", items: "Jest, Cyprus" }
];

export const About = memo(
    () => {
        return (<>
            <div className="about">
                <div className="row">
                    <AboutParagrpaphs/>
                    <Avatar/>
                </div>                
                <Skills />
            </div>

        </>)
    }
)

const AboutParagrpaphs = () => {
    return (
        <div className="about__block">
            {textsArr.map((text, i) => <AboutParagrpaph key={i} text={text} />)}
        </div>
    )
}

const Avatar = () => <img src={avatarSrc} className="avatar" alt="avatar" />;

const AboutParagrpaph: FC<{ text: string }> =
    (props) => {
        const blockRef = useRef<HTMLDivElement>(null);
        const onScreenPart = useOnScreen({ ref: blockRef });
        const styleClass = `about__paragraph ${onScreenPart > .9 ? "about__paragraph_show_on" : ""}`
        return <p className={styleClass} ref={blockRef}>{props.text}</p>
    }


const Skills = () => {
    return (
        <div className="">
            {skillsArr.map((skill, i) =>
                <div className="skill row" key={i}>
                    <h3 className="skill__title">{skill.title}</h3>
                    <p className="skill__items">{skill.items}</p>
                </div>)}
        </div>
    )
}


