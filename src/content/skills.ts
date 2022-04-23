const ProgrammingLangauge = 'Programming Language';
const Framework = 'Framework';
const Cloud = 'Cloud';
const MachineLearning = 'Machine Learning';

export type SkillType = {
    name: string;
    type: string;
}

 export const skills: SkillType[] = [
    {
        name: 'C#',
        type: ProgrammingLangauge,
    },
    {
        name: 'TypeScript',
        type: ProgrammingLangauge,
    },
    {
        name: 'JavaScript',
        type: ProgrammingLangauge,
    },
    {
        name: 'Python',
        type: ProgrammingLangauge,
    },
    {
        name: '.NET Core',
        type: Framework,
    },
    {
        name: 'AWS',
        type: Cloud,
    },
    {
        name: 'Docker',
        type: Cloud,
    },
    {
        name: 'Kubernetes',
        type: Cloud,
    },
    {
        name: 'React',
        type: Framework,
    }
    ,
    {
        name: 'PyTorch',
        type: MachineLearning,
    },
    {
        name: 'Machine Learning',
        type: MachineLearning,
    }
];