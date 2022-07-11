import { THeaderPoint, TProject } from "../types";
import divplanImage from '../images/projects/divplan.jpg';
import burgerImage from '../images/projects/burger.jpg';
import newsImage from '../images/projects/news.jpg';

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

export const projectsArr: TProject[] = [
    {
        title: "DivPlan",
        url: "https://divplan.com/app#",
        description: "The dividend tracker for investors",
        stack:
        {
            langs: ["JavaSript, SCSS, HTML"],
            libs: ["React", "Redux", "i18next", "Chart.js", "Hbs"],
            tools: ["GitLab", "Webpack", "Figma", "Postman"]
        },
        imageUrl: divplanImage
    },
    {
        title: "Space Burger",
        url: "https://bimimot.github.io/burger/",
        description: "Order menu for custom burger",
        stack:
        {
            langs: ["TypeSript, CSS, HTML"],
            libs: ["React", "Redux", "React-dnd", "Jest", "Cypress"],
            tools: ["GitHub", "Figma", "Websocket", "CSS.modules"]
        },
        imageUrl: burgerImage
    },
    {
        title: "News Finder",
        url: "https://divplan.com/app#",
        description: "The small search engine",
        stack:
        {
            langs: ["JavaSript, CSS, HTML"],
            libs: ["Express", "MongoDB", "Node.js", "Nginx"],
            tools: ["GitHub", "Webpack", "Figma", "Postman"]
        },
        imageUrl: newsImage
    }
];