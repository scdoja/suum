import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './SettingCard.scss';

class SettingCard extends Component{
	constructor(){
		super();
		this.state = {
			toggle:false
		};

		this.onChangeValue = this.onChangeValue.bind(this);
	}

	onChangeValue(event){
		console.log(event.target.value);

	if (this.state.toggle === true){
		this.setState({toggle:false});
	}else{
		this.setState({toggle:true});
	}

	}

	render(){
		return(
			<div className="primary-setting-card">
				<h1 className="setting-card-title">Notifications</h1>

				<label className="switch">
					<input type="checkbox" value={this.state.toggle} name="toggle" onChange={this.onChangeValue}/>
					<span className="slider round"></span>
				</label>
			</div>

		);
	}
}

export default SettingCard;
