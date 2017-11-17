import React from 'react';

import './styles.scss';

class Footer extends React.Component {
	render() {
		return(
			<div id="footer" className="footer">
				<div className="content footer__content">
					<ul className="f-info">
						<li className="f-info__item">
							<span className="f-info__label">Mobile: </span>
							<a className="f-info__link" href="tel:+380663905400">+38 (066) 390 54 00</a>
						</li>
						<li className="f-info__item">
							<span className="f-info__label">Email: </span>
							<a className="f-info__link" href="mailto:olha.dubynka@gmail.com">olha.dubynka&#64;gmail.com</a>
						</li>
						<li className="f-info__item">
							<span className="f-info__label">Skype: </span>
							<a className="f-info__link" href="skype:olga.olga5347">Olga Dubynka</a>
						</li>
					</ul>
					<div className="logo f-logo">&#060;&#047;&#062;</div>
				</div>
			</div>	
		);
	}
}

export default Footer;