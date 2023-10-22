import React, { Component } from 'react'
import clientOne from '../images/c1.jpg'
import './css/happyClient.css'

 class HappyClient extends Component {
	render() {
		return (
			<div className="happyClient">
				<div className="container row">

					<h3 className="happyClient-title">Доволните клиенти казаха:</h3>

					<div className="happyClient-box col l3 m3 s10">
						<div className="happyClient-image">
							<img src={clientOne} alt=""/>
							<p className="happyClient-image-name">Симона</p>
						</div>
						<p className="happyClient-quote">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ad doloribus provident voluptas qui cum at necessitatibus sunt, quae officia temporibus fugiat corrupti voluptates et laudantium cupiditate odit repellat alias.
						</p>
					</div>
					<div className="happyClient-box col l3 m3 s10">
						<div className="happyClient-image">
							<img src={clientOne} alt=""/>
							<p className="happyClient-image-name">Симона</p>
						</div>
						<p className="happyClient-quote">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ad doloribus provident voluptas qui cum at necessitatibus sunt, quae officia temporibus fugiat corrupti voluptates et laudantium cupiditate odit repellat alias.
						</p>
					</div>
					<div className="happyClient-box col l3 m3 s10">
						<div className="happyClient-image">
							<img src={clientOne} alt=""/>
							<p className="happyClient-image-name">Симона</p>
						</div>
						<p className="happyClient-quote">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ad doloribus provident voluptas qui cum at necessitatibus sunt, quae officia temporibus fugiat corrupti voluptates et laudantium cupiditate odit repellat alias.
						</p>
					</div>
				</div>
			</div>
		)
	}
}
export default HappyClient