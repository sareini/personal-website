import * as React from 'react';
import Education from '../components/education';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout pageTitle='About Me'>
			<Education/>
		</Layout>
	)
}

export default AboutPage;