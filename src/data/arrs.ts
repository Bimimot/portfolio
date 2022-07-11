import { THeaderPoint } from "../types";

export const headerArr: THeaderPoint[] = [
    { text: "", link: "#home", icon: "home", active: false },
    { text: "About", link: "#about", icon: "profile", active: false },
    { text: "Projects", link: "#projects", icon: "desktop", active: false },
    { text: "Contacts", link: "#contacts", icon: "letter", active: false }
];

export const textsArr: string[] = [
    "I've been working efficiently in telecom companies in various positions for 15 years. When I was satisfied my management job less I decided to change my profession.",
    "Programming always attracted me as a field of unlimited opportunities for self - development. In 2019 - 2020 I was studying at Yandex School of Data Analysis.",
    "After successful passing of the graduation project  I  started working as a programmer.My self - organization skills and perseverance to goals have helped me become a part of the professional IT - team.",
    "At outside working and studying hours I like to play the block - flute.Programming and music have a lot of common - a well - written code is like a beautifully played melody."
];

export const skillsArr: {title: string, items: string}[] = [
    { title: "Languages", items: "JavaScript, TypeScript, HTML5, CSS/SCSS" },
    { title: "Frameworks", items: "React, React Hooks, Redux, i18n, Express.js" },
    { title: "Testing", items: "Jest, Cyprus" }
];