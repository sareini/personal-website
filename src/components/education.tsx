import * as React from 'react';
import { educations, EducationType } from '../content/education';

const Education: React.FC = () => {
    return (
        <div>
            <h2>Education</h2>
            {educations.map((e: EducationType )=> {
                return (
                    <>
                        <p>{e.degree}</p>
                        <p>{e.school}</p>
                    </>
                )
            })}
        </div>
    );
}

export default Education;