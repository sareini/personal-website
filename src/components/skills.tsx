import * as React from 'react';
import { gridList } from './skills.module.css';
import { SkillType, skills } from '../content/skills';

const Skills: React.FC = () => {
    return (
        <div>
            <h3>Skills</h3>
            <div className={gridList}>
            {skills.map((s: SkillType )=> {
                return <p key={s.name}>{s.name}</p>;
            })}
            </div>
        </div>
    )
}

export default Skills;