import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="page-footer grey lighte-3">
			<div className="container">
			  <div className="row">
				<div className="col l6 s12">
				  <h5 className="white-text">Footer Content</h5>
				  <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
				  <a className="waves-effect waves-light btn social facebook">
				  	<i className="fa fa-facebook"></i>Посетете ни във facebook
				  </a>
				</div>
				<div className="col l4 offset-l2 s12">
				  {/* <h5 className="white-text">Links</h5> */}
				  <ul>
				    <li><NavLink exact to="/" className="grey-text text-lighten-3">Начало</NavLink></li>
		            <li><NavLink to="/Servises" className="grey-text text-lighten-3">Услуги</NavLink></li>
		            <li><NavLink to="/Info" className="grey-text text-lighten-3">Инфо</NavLink></li>
		            <li><NavLink to="/Contacts" className="grey-text text-lighten-3">Контакти</NavLink></li>
					<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
				</ul>
				</div>
			  </div>
			</div>
			<div className="footer-copyright">
			  <div className="container">
			 	 © PipeMasters 2020
			  <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
			  </div>
			</div>
	  </footer>
	);
}

export default Footer;
