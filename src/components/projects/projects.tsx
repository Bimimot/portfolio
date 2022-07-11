import { FC } from 'react';
import divplanImage from '../../images/projects/divplan.jpg';

type TProject = {
    title: string,
    url: string,
    description: string,
    stack: string[],
    imageUrl: string
}

const projectsArr: TProject[] = [
    {
        title: "DivPlan",
        url: "https://divplan.com/app#",
        description: "Frontend",
        stack: ["React", "JavaSript", "Redux", "i18next", "chart.js", "HBS", "SCSS"],
        imageUrl: divplanImage
    }
];

export const Projects = () => {
    return (
        <div>
            {projectsArr.map((project, i) => <ProjectCard key={i} project={project} />)}
        </div>
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
        <a className='project' href={url} target="blank">
            <span className='blocktitle'>{title}</span>
            <p>{description}</p>
            <div>
                {stack.map((item, i) => <span key={i}>{item}</span>)}
            </div>
            <img className='project__image' src={imageUrl} alt={title} />
        </a>
    )
}