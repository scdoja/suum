import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';

import Home from './screen/Home.jsx';
import History from './screen/History.jsx';
import { Settings } from './screen/Settings.jsx';
import { Register } from './screen/Register.jsx';
import { Login } from './screen/Login.jsx';
import {HabitNursery} from './screen/HabitNursery.jsx';
import WeeklyReport from './screen/WeeklyReport.jsx';

import OnBoardingScreens from './screen/OnBoarding.jsx';
import GetStartedScreen from './screen/GetStarted.jsx';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx';

//A class that shows all the components that we imported abve ^

//make all screens dark mode.

function App (){

	const [isAuth, setIsAuth] = useState(false);

	// useEffect(() => {

	// 	async function ifUserLoggedIn() {
	// 		// fetch data from a url endpoint
	// 		const isLogged = await axios.get("/api/user/login").then((response) => {

	// 			if (response.data = "You're logged in."){
	// 				setIsAuth(true);
	// 			} else {
	// 				setIsAuth(false);
	// 			}
			 
	// 		});

	// 	  }


	// },[]);

	  return (
			//user session?
		 	//Router navigates the "page" in the broswer search bar to the correct screen component as listed below

			//Switch ensures that each page component is displayed on its own. And the URL has to be an 'exact match'
			<Router>

				<Switch>
					<Route path="/" exact component={GetStartedScreen}/>
					<Route path="/home"  exact component={Home}/>
					<Route path="/onBoarding"  exact component={OnBoardingScreens}/>
					<Route path="/register" exact component={Register}/>
					<Route path="/login" exact component={Login}/>
					<Route path="/weeklyReport" exact component={WeeklyReport}/>
					<Route path="/habitNursery" exact component={HabitNursery}/>
					<Route path="/history" exact component={History}/>
					<Route path="/settings"  exact component={Settings}/>
					{/* <ProtectedRoute path="/home" component={Home} isAuth={isAuth}/>  */}

				</Switch>

				{/* The hamburger Menu will now appear above all the pages in the app because its always rendered on the app*/}
				<HamburgerMenu/>

			

				

			</Router>

		);


}

export default App;
