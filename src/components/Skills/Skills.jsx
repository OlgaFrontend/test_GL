import React from 'react';
import uuid from 'uuid';

import './styles.scss';

class Skills extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let listItems = this.props.items.map(item => {
			return <li key={uuid.v4()}>{item}</li>;
		});
		return(
			<section id="skills" className="skills">
				<h3 className="skills__title">skills</h3>
				<div className="content">
					<ul className="skills__list">
						{listItems}
					</ul>
					<div className="skills__level"></div>
				</div>
			</section>
		);
	}
}

export default Skills;