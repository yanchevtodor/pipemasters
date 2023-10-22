import React from 'react';
import imaageFix from '../images/plumbing-clip-art-free-1.png'
import  './css/header.css'

const HomeHeader = () => {
	return (
		<div className="header row">
			<div className="container">
				<div className="header-title">
					<h1>Имате нужда от ремонт?</h1>
					<h3>Ние ще се справим с всичко.</h3>
				</div>
				<div className="header-content ">
					<div className="header-left col l6 m12 s12 ">
						<h3>Завявете вашият проблем сега</h3>
						<h4>Нашите консултанти ще се всържат с вас веднага</h4>
					</div>
					<div className="header-right col l6 m12 s12 center-align">
						<img src={imaageFix} alt=""/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeHeader;