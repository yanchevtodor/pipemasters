import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import imaageFix from '../images/plumbing-clip-art-free-1.png'
import './css/navbar.css'



const Navbar = () => {
	return (
		<div className="navigation">
			<nav className="white">
				<div className="nav-wrapper">
					<a href="/" data-target="slide-out" className="sidenav-trigger hide-on-large-only"><i className="material-icons">menu</i></a>


		     		<Link  to="/" className="brand-logo">PipeMasters</Link>

					 <ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><NavLink exact to="/">Начало</NavLink></li>
			            <li><NavLink to="/Servises">Услуги</NavLink></li>
			            <li><NavLink to="/Info">Инфо</NavLink></li>
			            <li><NavLink to="/Contacts">Контакти</NavLink></li>
					</ul>

				</div>
			</nav>

			 <ul id="slide-out" className="sidenav">
				 <li>
					 <div className="mobile-nav-logo center-align">
						 <img src={imaageFix} alt=""/>
					 </div>
					 
				 </li>
				 <li><NavLink to="/">Начало</NavLink></li>
	             <li><NavLink to="/Servises">Услуги</NavLink></li>
	             <li><NavLink to="/Info">Инфо</NavLink></li>
	             <li><NavLink to="/Contacts">Контакти</NavLink></li>
		   </ul>
	   			
		</div>
	);
}

export default Navbar;