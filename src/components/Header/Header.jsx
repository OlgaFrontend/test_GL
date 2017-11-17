import React from 'react';


import './styles.scss';

class Header extends React.Component {
	render() {
		return (
			<div id="home" className="header">
				<div className="content">
					<div className="header__top">
						<div className="logo">&#060;&#047;&#062;</div>
						<ul className="nav">
							<li className="nav__item"><a className="nav__link" href="#">Home</a></li>
							<li className="nav__item"><a className="nav__link" href="#">About</a></li>
							<li className="nav__item"><a className="nav__link" href="#">Skills</a></li>
							<li className="nav__item"><a className="nav__link" href="#">Contact</a></li>
						</ul>
					</div>
					<h1 className="header__title">Olga Dubynka</h1>
					<h2 className="header__text">Front-end Developer</h2>
				</div>
			</div>
		);
	}
}

export default Header;