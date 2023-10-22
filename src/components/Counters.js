import React, { Component } from 'react'
import Counter from '../UI/counter'
import './css/counters.css'

class Counters extends Component {
	state = {  }

	componentDidMount(){
		Counter('.counters', 300)
	}

	render() { 
		return ( 
			<div className="counters">
				<div className="container">
					<div className="row center-align">

						<div className="conunter col l2 m4 s6">
							<div className="counterCircle valign-wrapper center-align ">
								<p datatarget="342" className="conterCount">0</p>
							</div>
							<div className="counterText">
								<p className="counterText">Доволни клиенти</p>

							</div>
						</div>
						<div className="conunter col l2 m4 s6">
							<div className="counterCircle valign-wrapper center-align ">
								<p datatarget="1342" className="conterCount">0</p>
							</div>
							<div className="counterText">
								<p className="counterText">Доволни клиенти</p>

							</div>
						</div>
						<div className="conunter col l2 m4 s6">
							<div className="counterCircle valign-wrapper center-align ">
								<p datatarget="223" className="conterCount">0</p>
							</div>
							<div className="counterText">
								<p className="counterText">Доволни клиенти</p>

							</div>
						</div>
						<div className="conunter col l2 m4 s6">
							<div className="counterCircle valign-wrapper center-align ">
								<p datatarget="241" className="conterCount">0</p>
							</div>
							<div className="counterText">
								<p className="counterText">Доволни клиенти</p>

							</div>
						</div>
						<div className="conunter col l2 m4 s6">
							<div className="counterCircle valign-wrapper center-align ">
								<p datatarget="342" className="conterCount">0</p>
							</div>
							<div className="counterText">
								<p className="counterText">Доволни клиенти</p>

							</div>
						</div>
						<div className="conunter col l2 m4 s6">
							<div className="counterCircle valign-wrapper center-align ">
								<p datatarget="535" className="conterCount">0</p>
							</div>
							<div className="counterText">
								<p className="counterText">Доволни клиенти</p>

							</div>
						</div>
						
					</div>
				</div>
			</div>
		 );
	}
}
 
export default Counters;