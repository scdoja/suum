import React, { useEffect, useState, createRef } from 'react';
import '../app.css';
import '../scss/main.scss';
import axios from 'axios';
import lottie from 'lottie-web';
import plantAnimation from '../assets/plant3.json';
import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';
import DateTime from '../components/DateTime/DateTime.jsx';


//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits.
//make all components dark mode as well.

///habitTab1 is checked && dispalay component
//



export const Home = () => {
	let anim;
	// get API response.

	const [todayHabits, setHabits] = useState([]);
	const [todayTip, setTodayTip] = useState([]);

	useEffect(() => {
		async function getHabits() {
			// fetch data from a url endpoint
			const getHabit = await axios.get('/api/habit')
				.then(response => {
					setHabits(response.data);
				});
			const getTipofDay = await axios.get('/api/tips')
				.then(response => {
					setTodayTip(response.data);
				});

		}
		getHabits();

		anim = lottie.loadAnimation({
			container: plantAnimationDiv.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: plantAnimation
		});
		return () => anim.destroy(); // optional clean up for unmounting
	}, []);

	// async function apiCall() {
	// 	try {

	// 		// fetch data from a url endpoint
	// 		const data = await axios.get(`/api/habit`, {headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'}})
	// 		.then(res=>{
	// 			setHabits(res.data);
	// 			//console.log(todayHabits);
	// 		});
	// 		return data;
	// 	} catch(error) {
	// 		console.log("error", error);
	// 		// appropriately handle the error
	// 	}
	// }

	console.log(todayHabits);
	//console.log(todayTip);
	let plantAnimationDiv = createRef();




	const playAnimation = () => {
		anim.playSegments([0, 165], true);
		//loopAnimation();
		console.log("playing")
	}

	const loopAnimation = () => {
		anim.playSegments([139, 165], false);
	}

	const dateTimePadding = {
		paddingLeft: '2rem',
		paddingTop: '2rem'
	}

	return (
		//if night time show checkin process.
		//IF (Date.prototype.getHours() > 20 && Date!= "friday" ) {
		// show checkinModal => Planning Modal
		// }else if (Date.prototype.getHours() > 20 && Date(day) === "friday") {
		//     //show weeklyReviewCard componentONly.
		//     //on close... load homescreen with habitTabWidget?????
		// }else{
		//if it's before 8pm on whatever day
		//show habitTabWidget
		//}

		//add imported classes here
		//always have div to place component notes

		<div>
			<div style={dateTimePadding}>
				<DateTime date={new Date()} />
			</div>
			{todayHabits.length > 0 && <HabitTabWidget todayHabits={todayHabits} playAnimation={playAnimation} tipOfDay={todayTip} />}
			
			<div className="plantAnimationDiv" ref={plantAnimationDiv} />

		</div>
	);
}
