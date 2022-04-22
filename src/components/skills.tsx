import * as React from 'react';
import { gridList } from './skills.module.css';

const skillsList: string[] = [
    'JavaScript',
    'TypeScript',
    'Python',
    'C#',
    '.NET Core',
    'AWS',
    'Docker',
    'Kubernetes',
    'React',
    'Machine Learning',
    'PyTorch',
];

const Skills: React.FC = () => {
    return (
        <div>
            <h2>Skills</h2>
            <div className={gridList}>
            {skillsList.map(s => {
                return <p key={s}>{s}</p>;
            })}
            </div>
        </div>
    )
}

export default Skills;