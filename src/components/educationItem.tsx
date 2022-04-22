import * as React from 'react';

type Degree = 'MS' | 'BS';

type EducationItemProps = {
    degreeType: Degree;
    school: string;
    major: string;
    specialization?: string | undefined;
}

const EducationItem: React.FC<EducationItemProps>= (props: EducationItemProps) => {
    const { degreeType, school, major, specialization } = props;

    const header = specialization === undefined
        ? <p>{degreeType} {major}</p>
        : <p>{degreeType} {major}, {specialization + ' Specialization'}</p>;

    return (
        <>
            {header}
            <p>{school}</p>
        </>
    )
}

export default EducationItem;