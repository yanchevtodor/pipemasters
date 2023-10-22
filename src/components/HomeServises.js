import React, { Component } from 'react';

import HomeServisesServise from './HomeServisesServes';


class HomeServises extends Component {
	
	render(){

		const { servises } = this.props

		return (
			<div className='servises'>
				<div className="container">
					<HomeServisesServise servises={servises}/>
				</div>
			</div>
		);
	}
}

export default HomeServises;
