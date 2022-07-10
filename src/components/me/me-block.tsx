import React from "react";
import { DrawUnderline } from "../animations/draw-underline";
import { ShowBlock } from "../animations/show-block";

export const Me = () => {
    const linesArr = [
        { text: "I like", },
        { text: "to do", },
        { text: "the right", underline: true },
        { text: "code.", }
    ];

    const lineDelay = .2;


    return (
        <div className="me">
            <span className="text">Hi, my name is</span>
            <h1 className="title">Stepan Popov.</h1>
            <p className="subtitle color-primary">I'm web developer.</p>
            <div className="me__slogan">
                {linesArr.map((line, i) =>
                    <ShowBlock delay={lineDelay * (i + 2)} key={i}>
                        <span  className="me__line">
                            {line.text}
                            {line.underline && <DrawUnderline delay={(linesArr.length + 5) * lineDelay} />}
                        </span>
                    </ShowBlock>
                )}
            </div>
        </div>
    )
}

