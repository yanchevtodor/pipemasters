import React, { Component } from 'react'
import imaageFix from '../images/fix.png'
import './css/smallHeader.css'

class SmallHeader extends Component {
	state = {  }
	componentDidMount() {
		
	}
	render() { 
		return ( 
			<div className="smallHader">
				<div className="container row valign-wrapper">
					<div className="smallHader-image col l2 m2 s2">
						<img src={imaageFix} alt="" className="responsive-img"/>
					</div>
					<div className="smallHader-text col l10 m10 s10">
						<h4>{this.props.text}</h4>
					</div>
				</div>
			</div>
		 );
	}
}
 
export default SmallHeader;
