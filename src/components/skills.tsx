import * as React from 'react';
import { gridList } from '../styles/skills.module.css';
import { SkillType, skills } from '../content/skills';
import { aboutContainer, aboutHeadingText } from '../styles/common.module.css';

const Skills: React.FC = () => {
    return (
        <div className={aboutContainer}>
            <h3 className={aboutHeadingText}>Skills</h3>
            <div className={gridList}>
            {skills.map((s: SkillType )=> {
                return <p key={s.name}>{s.name}</p>;
            })}
            </div>
        </div>
    )
}

export default Skills;