import * as React from 'react';
import { educations, EducationType } from '../content/education';
import { school, degree, educationSection, educationItem } from './education.module.css';

const Education: React.FC = () => {
    return (
        <div>
            <h3>Education</h3>
            <div className={educationSection}>
                {educations.map((e: EducationType )=> {
                    return (
                        <div className={educationItem}>
                            <p className={degree} >{e.degree}</p>
                            <p className={school}>{e.school}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Education;