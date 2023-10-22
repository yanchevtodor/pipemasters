import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeServises from './HomeServises';
import HomeImageTable from './HomeImageTable';
import bath from '../images/water-2825771_1920.jpg';
import broken from '../images/bathtub-2174699_1920.jpg';
import whater from '../images/Twin-Cities-Leaky-Pipe.jpg';
import Counters from './Counters';
import HappyClient from './HappyClient';


class Home extends Component {
	state = { 
		servises:[
			{title: 'Водата Спря?', text:'1Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae id error eos? Exercitationem quibusdam, animi eveniet assumenda non debitis magni dolores quae itaque doloribus quam libero, mollitia qui quaerat!', image: bath, key: 1},
			{title: 'Водата Спря?', text:'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae id error eos? Exercitationem quibusdam, animi eveniet assumenda non debitis magni dolores quae itaque doloribus quam libero, mollitia qui quaerat!', image:whater, key: 2},
			{title: 'Водата Спря?', text:'3Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae id error eos? Exercitationem quibusdam, animi eveniet assumenda non debitis magni dolores quae itaque doloribus quam libero, mollitia qui quaerat!', image: broken, key: 3}
		]
	 }
	render() { 
		return ( 
			<div className='home'>
				<HomeHeader />
				<HomeServises servises={this.state.servises}/>
				<HomeImageTable />
				<Counters />
				<HappyClient />
			</div>
		 );
	}
}


export default Home;
