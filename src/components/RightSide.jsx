import React, { useContext } from 'react'
import { Form } from './RightSide/Form'
import { mainAppContext } from '../context/MainAppContext'
import { SubmittedForm } from './RightSide/SubmittedForm'

export const RightSide = () => {
  
  const {currentAppState} = useContext(mainAppContext)
  const {isFormSubmitted} = currentAppState

  return (
    <div className='right-side-container side-container'>
      {
        isFormSubmitted ? <SubmittedForm /> : <Form />

        }
    </div>
  )
}
