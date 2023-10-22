import React, { Component } from 'react'
import './css/imageTable.css'


class HomeImageTable extends Component {
	componentDidMount() {
		
    }
	render() { 
		return ( 
			<div className="homeImageTable">
				<div className="row">
					<div className="homeImageTable-image col l6 m4 s12">

					</div>
					<div className="homeImageTable-table col l6 m8 s12">
						<div className="row">
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">accessibility</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align ">Най добрите</p>
								</div>
							</div>
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">airplanemode_active</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">airport_shuttle</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
							
						</div> 

						<div className="row">
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">announcement</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">assignment_ind</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">beach_access</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
							
						</div>
						<div className="row">
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">border_color</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">brightness_1</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
							<div className="homeImageTable-item col l4 m4 s4">
								<div className="homeImageTable-innerImage center-align">
									<i className="large material-icons">brightness_5</i>
								</div>
								<div className="homeImageTable-innerText text-center">
									<p className="center-align">Най добрите</p>
								</div>
							</div>
						
						</div>
						
					</div>
				</div>
		  	</div>
		);
	}
}
 
export default HomeImageTable;