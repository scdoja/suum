import React, {useEffect, useState} from 'react';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';
import { Tabs } from './Tabs';
import './HabitTabWidget.scss';



export const HabitTabWidget = (todayHabits) => {
  //Track state for the Habit Tab Widget component to know what tab has been clicked so far
  const [activeTab, setActiveTab ] = useState('tab1');
  //Create 3 Tabs by my naming them in this array
  const tabs = ["tab1", "tab2", "tab3"]

  //Track state for each of the 3 Habit Check Items that are used 
  const [ habit1IsChecked, setHabit1 ] = useState(false);
  const [ habit2IsChecked, setHabit2 ] = useState(true);
  const [ habit3IsChecked, setHabit3 ] = useState(false);
  
  // Create and store new stances of the habitCheckItem in here with the 
  const content = {
    tab1: <HabitCheckItem setHabitState={setHabit1} checked={habit1IsChecked} habitName= "habit 1 name"/>,
    tab2: <HabitCheckItem setHabitState={setHabit2} checked={habit2IsChecked} habitName= "habit 2 name"/>,
    tab3: <HabitCheckItem setHabitState={setHabit3} checked={habit3IsChecked} habitName= "habit 3 name"/>
  }
  
  //When tab is clicked this function sets the state of the active tab on the HabitTabWidget to the sected tab
  const onTabClickHandler = (tab) => {
    setActiveTab(tab);
  }
  //This function is called anytime there is a change in the activeTab. It gets the appropriate content form the content object for the active tab
  const displayContent = (tab) => {
    return content[tab];
  }
  


  return (
     <div> 
        <h1>HI WE'RE TESTING THE HabitTabWidget</h1>
        <div>
          {
            tabs.map((tab, idx)=> {
              return <Tabs key={idx} onClickHandler={onTabClickHandler} tab={tab} />
            })

          }
        <div className='HabitTabWidget bg-green'>{displayContent(activeTab)}</div>
        </div>
     </div> 
  );  
} 
