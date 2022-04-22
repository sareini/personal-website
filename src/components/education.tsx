import * as React from 'react';
import EducationItem from './educationItem';

const Education: React.FC = () => {
    return (
        <div>
            <h2>Education</h2>
            <EducationItem
                degreeType='MS'
                school='Georgia Institute of Technology'
                major='Computer Science'
                specialization='Machine Learning'
            />
            <EducationItem
                degreeType='BS'
                school='University of Virginia'
                major='Computer Science'
            />
        </div>
    );
}

export default Education;