import * as React from 'react';
import { contactSection, homeContainer } from '../styles/home.module.css';
import { SocialIcon } from 'react-social-icons';
import { aboutContainer } from '../styles/common.module.css';

const Skills: React.FC = () => {
    return (
		<div className={homeContainer}>
			<div className={`${aboutContainer}`}>
				<p>My name is Muhammad Sareini and I am an engineer at Replit focusing on Data</p>
			</div>
			<div className={`${contactSection} ${aboutContainer}`}>
				<SocialIcon url='https://www.linkedin.com/in/muhammadhsareini' target='_blank'/>
				<SocialIcon url='https://github.com/sareini' target='_blank'/>
			</div>
		</div>
    )
}

export default Skills;