import { FC, useRef, memo } from "react";
import useOnScreen from "../../helpers/useOnScreen";
import SvgIcon from "../svg-icon/SvgIcon";
import avatarSrc from "../../images/avatar.jpeg";
import { textsArr, skillsArr } from "../../data/arrs";

export const About = memo(
    () => {
        return (<>
            <div className="about">
                <div className="row">
                    <AboutParagrpaphs />
                    <Avatar />
                </div>
                <Skills />
                <SvgIcon name="github" size={42} color /> 
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
                    <h3 className="title title_type_block">{skill.title}</h3>
                    <p>{skill.items}</p>
                </div>)}
        </div>
    )
}


