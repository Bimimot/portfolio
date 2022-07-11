import { FC } from 'react';
import divplanImage from '../../images/projects/divplan.jpg';
import SvgIcon from '../svg-icon/SvgIcon';

type TProjectStacks = { [key in "langs" | "libs" | "tools"]: string[] };

type TProject = {
    title: string,
    url: string,
    description: string,
    stack: TProjectStacks,
    imageUrl: string
};

const projectsArr: TProject[] = [
    {
        title: "DivPlan",
        url: "https://divplan.com/app#",
        description: "The dividend tracker for investors",
        stack:
        {
            langs: ["JavaSript, SCSS, HTML"],
            libs: ["React", "Redux", "i18next", "Chart.js", "Hbs"],
            tools: ["GitLab", "Webpack", "Figma", "REST API", "Postman"]
        },
        imageUrl: divplanImage
    }
];

export const Projects = () => {
    return (
        <>
            {projectsArr.map((project, i) =>
                <ProjectCard key={i} project={project} />)}
        </>
    )
}


const ProjectCard: FC<{ project: TProject }> = (props) => {
    const { project } = props;
    const {
        title,
        description,
        url,
        imageUrl,
        stack
    } = project;

    return (
        <div className='project'>
            <div className='project__intro'>
                <a className='title title_type_block' href={url} target="blank">{title}</a>
                <p className='subtitle subtitle_type_block'>{description}</p>
            </div>
            <ul className='project__stacks'>
                <ProjectStack items={stack.langs} icon="code" />
                <ProjectStack items={stack.libs} icon="gear" />
                <ProjectStack items={stack.tools} icon="wrench" />
            </ul>
            <div className='project__image-container'>
                <img className='project__image' src={imageUrl} alt={title} />
            </div>
        </div>
    )
}


const ProjectStack: FC<{ items: string[], icon: any }> = (props) => {
    const { items, icon } = props;
    const text = items.join(', ');
    return (
        <li className='project__stack'>
            <SvgIcon name={icon} color />
            {text}
        </li>
    )
}