import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './PastPlantWidget.scss';

class PastPlantWidget extends Component{
	  constructor(props) {
	    super(props);
	    this.state = {isToggled: true};
	    this.handleClick = this.handleClick.bind(this);
	  }

	  handleClick() {
	    this.setState(state => ({
	      isToggled: !state.isToggled
	    }));
	  }

	  render() {
	    return (
	      <div className="card" onClick={this.handleClick}>
			<h1 className="title">
				{this.state.isToggled ? 'Jan 01 ~ 07' : ''}
			</h1>
			<p className="progress">
				{this.state.isToggled ? '' : '14/21 Habits'}
			</p>
			<div className="bar-container">
				<div className="bar">14/21</div>
			</div>
		  </div>
	    );
	  }
	}

export default PastPlantWidget;
