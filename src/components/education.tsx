import * as React from 'react';
import { educations, EducationType } from '../content/education';
import { school, degree, educationItem } from '../styles/education.module.css';
import { aboutContainer, aboutHeadingText } from '../styles/common.module.css';

const Education: React.FC = () => {
    return (
        <div>
            <div className={aboutContainer}>
                <h3 className={aboutHeadingText}>Education</h3>
                {educations.map((e: EducationType)=> {
                    return (
                        <div key={e.school} className={educationItem}>
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