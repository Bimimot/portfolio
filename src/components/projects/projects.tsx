import { FC } from 'react';
import SvgIcon from '../svg-icon/SvgIcon';
import { TIconSvgName, TProject } from '../../types';
import { projectsArr } from '../../data/arrs';

export const Projects = () => {
    return (
        <div className='projects'>
            {projectsArr.map((project, i) =>
                <ProjectCard key={i} project={project} />)}
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
};

const ProjectStack: FC<{ items: string[], icon: TIconSvgName }> = (props) => {
    const { items, icon } = props;
    const text = items.join(', ');
    return (
        <li className='project__stack'>
            <SvgIcon name={icon} color />
            {text}
        </li>
    )
}