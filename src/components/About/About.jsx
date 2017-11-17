import React from 'react';


import './styles.scss';

class About extends React.Component {
	render() {
		return(
			<section id="about" className="about">
				<h3 className="about__title">about</h3>
				<div className="content about__block">
					<div className="ab ab_left">
						<h4 className="ab__title">Goals</h4>
						<p className="ab__text">My goals are to work together with professionals in the company
						 of my dreams, to join strong team of web developers to develop with the team and build 
						  together progressive high-quality web applications and of course to become a 
						  professional frontend developer.
						 </p>
					</div>
					<div className="avatar"></div>
					<div className="ab ab_right">
						<h4 className="ab__title">Dreams</h4>
						<p className="ab__text">I have many dreams, but the most important ones are to learn French, 
						German, travel with my family, run a marathon, see the Niagara Falls and of course to become a 
						professional frontend developer.</p>
					</div>
				</div>
			</section>
		);
	}
}

export default About;