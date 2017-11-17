import React from 'react';

import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';


class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<About/>
				<Skills items={['HTML5', 'CSS3', 'JavaScript', 'SASS/SCSS', 'Gulp', 'Git', 'Webpack', 'React', 'JQuery']}/>
				<Contacts/>
				<Footer/>
			</div>
		);
	}
}

export default App;