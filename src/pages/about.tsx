import * as React from 'react';
import Education from '../components/education';
import Layout from '../components/layout';
import Skills from '../components/skills';

const AboutPage = () => {
	return (
		<Layout pageTitle='About Me'>
			<div>
				<Education/>
				<Skills/>
			</div>
		</Layout>
	)
}

export default AboutPage;