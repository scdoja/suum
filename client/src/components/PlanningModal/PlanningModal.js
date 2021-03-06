import React, { useState } from 'react';
import {Form} from '../Form/Form.js';
import { useHistory } from "react-router-dom";


export const PlanningModal = ()=> {
  const [formOpen, setFormOpen] = useState(true);


  const toggleForm = ()=> {
    setFormOpen(!formOpen);

  }

  //function to close form when backdrop is closed
  // const closeForm = (e)=> {
  //   if (e.target.id==="modalbackdrop") {
  //     toggleForm();
  //   }else{
  //     console.log("wrongId");
  //   }
  // }



  return (
    <>
    {formOpen &&
      <Form toggleForm={toggleForm}/>
    }
      </>
  )
}
