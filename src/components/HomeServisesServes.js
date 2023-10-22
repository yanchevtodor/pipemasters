import React, { Component } from 'react'
import Scroll from '../UI/scroll'
import './css/servises.css'
class HomeServisesServise extends Component {
	
	componentDidMount() {
		Scroll('.servise-text', 'servise-left')
		Scroll('.servise-image', 'servise-right')

	}

	render() { 

		const { servises } = this.props

		const servisesNew = servises.length ? (
			servises.map(servise => {
				return (
					<div className="servise row valign-wrapper center-align" key={servise.key} >
						<div className=" servise-text col l6 m6 s12">
							<p>{servise.title}</p>
							<p>{servise.text}</p>
							</div>
						<div className="servise-image col l6 m6 s12">
							<img src={servise.image} alt=""/>
						</div>					
					</div>
				)
			})
		) : (
			<p className="center">You have no todo's left</p>
		)

		return ( 
			<div>
				{servisesNew}
			</div>
		 );
	}
}
 
export default HomeServisesServise;