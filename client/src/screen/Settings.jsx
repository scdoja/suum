import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';
import axios from 'axios';

import {SettingCard} from '../components/SettingCard/SettingCard.js';
import SettingSocialMedia from '../components/SettingSocialMedia/SettingSocial.js';
import { MainSettingCardInfo } from '../components/MainSettingCardInfo/MainSettingCardInfo.js';


//A Class that holds all components for Settings Screen

export const Settings = () => {

	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		
		async function getSettings() {
			const getSettings = await axios.get('/api/user')
				.then(response => {
					setUserInfo(response.data);
				});
		}

		getSettings();
		
	},[]);


	


console.log(userInfo);

//GET User call by userId
//populate name & email in <MainSettingCardInfo username={(response.username)} email={(response.email)}/>

//When edit is finished => PUSH API call
//adds new data into user Object
//returns current state => take return and populate settings card.

const settingScreenTitle = {
	fontSize: "24px",
	fontWeight: "600",
	color: "#323232",
	marginBottom: "1rem"
}
const bodyPadding = {
	padding: "2rem"
}

return (

	//add imported classes here
	//always have div to place component notes

	<div style={bodyPadding}>
		<h1 style={settingScreenTitle}>Settings</h1>
		{ userInfo && <MainSettingCardInfo userInfo={userInfo} />}

		{/* NOtifications  */}

		{/* SettingCard comonent to call toggle in itself. Accepts label prop to change text. */}
		{/* API call happens IN SettingCard component. */}
		{ userInfo &&<SettingCard userInfo={userInfo} />}


		<SettingSocialMedia />

	</div>

);


}
