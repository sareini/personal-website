import * as React from 'react';
import { githubImage, linkedinImage, contactSection, homeContainer } from './home.module.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import { aboutContainer } from './common.module.css';

const Skills: React.FC = () => {
    return (
		<div className={homeContainer}>
			<div className={`${aboutContainer}`}>
				<p>My name is Muhammad Sareini and I am an engineer at Replit focusing on Data</p>
			</div>
			<div className={`${contactSection} ${aboutContainer}`}>
				<a href='https://www.linkedin.com/in/muhammadhsareini' target='_blank'>
					<img className={linkedinImage} src={linkedin} alt='linkedin'/>
				</a>
				<a href='https://github.com/sareini' target='_blank'>
					<img className={githubImage} src={github} alt='github'/>
				</a>
			</div>
		</div>
    )
}

export default Skills;