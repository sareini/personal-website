import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css';

type LayoutProps = {
	pageTitle: string;
	children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
	const { pageTitle, children } = props;

	return (
		<div className={container}>
			<title>{pageTitle}</title>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/about" className={navLinkText}>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/contact" className={navLinkText}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	)

};

export default Layout