import React from 'react';

import './styles.scss';

class Contacts extends React.Component {
	render() {
		return(
			<section id="contact" className="contact">
				<h3 className="contact__title">contact</h3>
				<div className="contact__block content">
					<ul className="c-info">
						<li className="c-info__item">
							<p className="c-info__label">Phone number</p>
							<a className="c-info__link" href="tel:+380663905400">+38 (066) 390 54 00</a>
						</li>
						<li className="c-info__item">
							<p className="c-info__label">Email:</p>
							<a className="c-info__link" href="mailto:olha.dubynka@gmail.com">olha.dubynka&#64;gmail.com</a>
						</li>
						<li className="c-info__item">
							<p className="c-info__label">Skype</p>
							<a className="c-info__link" href="skype:olga.olga5347">Olga Dubynka</a>
						</li>
					</ul>
						<form className="c-form" action="#" method="POST">
							<input type="text" name="name" placeholder="Name"/>
							<input type="email" name="email" placeholder="Email"/>
							<textarea name="message" placeholder="Send a message"></textarea>
							<button className="c-form__btn" type="submit">Send</button> 
						</form>
				</div>
			</section>	
		);
	}
}

export default Contacts;