import React, { Component } from 'react';
import SmallHeader from './SmallHeader';
import './css/contacts.css'
import Home from './Home';



class Contacts  extends Component {


	handleSubmith = (e) => {
		e.preventDefault();

	}
	
	sendForm = () => {

	}
	render(){
		return (
			<div>
				<div className="hide">
					<Home />
				</div>
				<SmallHeader text={'Подайте вашето запитване към нас и ние ще ви отговорим възможно най бързо'}/>

				<div className="contacts">
					<div className="container row">
						<h2 className="contacts-title">Контакти</h2>
						<div className="conatct-text col l6 m4 s12">
							
							<br/>
							<h4>PipeMasters</h4>
							<p><i className="material-icons left">face</i>Янчо Янчев</p>
							<p><i className="material-icons left">phone</i>0878123456</p>
							<p><i className="material-icons left">email</i>yancho@yancho.com</p>
						</div>

						<div className="formHolder  col l6 m8 s12">

								<form onSubmit={this.handleSubmith} className=" align-center"> 
									<input type="text" placeholder="Име"/>
									<input type="text" placeholder="Телефон"/>
									<input type="text" placeholder="Емейл"/>
									<br/>
									<textarea name="contact-text" id="" placeholder="Въведете вашето запитване"></textarea>
									<a onClick={this.sendForm} className="waves-effect waves-light btn modal-trigger right" href="#modal1">Изпрати<i className="material-icons right">send</i></a>
								
								
								</form>

						</div>
					</div>
				</div>
				

				
				  <div id="modal1" className="modal">
				    <div className="modal-content">
				      <h4>Вашето запитване е изпратено</h4>
				      <p>Ще ви отговорим възможно най скоро</p>
				    </div>
				    <div className="modal-footer">
				      <a href="#!" className="modal-close waves-effect waves-green btn-flat">ОК</a>
				    </div>
				  </div>
			</div>
		)
	}
}

export default Contacts;
