import { useContext, useEffect, useState } from "react"
import { mainAppContext } from "../../context/MainAppContext"

export const InputTypeOne = ({title, placeholder, error, type, targetProperty, isThisNumber, maxLenghtNumber}) => {

  const {currentAppState, setCurrentAppState} = useContext(mainAppContext)
  const {creditCardInfo, formErrors} = currentAppState


  const defineInputError=(err, newValue)=>{
    setCurrentAppState({
      ...currentAppState, 
      formErrors: {
        ...currentAppState.formErrors,
        [targetProperty]: err
      },
      creditCardInfo: {
        ...creditCardInfo,
        [targetProperty]: newValue
      }
    })
  }

  const changeCardInformation = (propToChange, {target})=>{
    if(isThisNumber) {
      let number = target.value
      function returnNewNumber(s) {
        return s.toString().replace(/\d{4}(?=.)/g, '$& ')
      }
      let newNumber = returnNewNumber(number)

      if (target.value.length >15 && !target.value.match(/[^$,.\d]/)){
        setCurrentAppState({
          ...currentAppState, 
          formErrors: {
            ...currentAppState.formErrors,
            [targetProperty]: 'complete'
          },
          creditCardInfo: {
            ...creditCardInfo,
            [propToChange]: newNumber
          }
        })
      } else if(target.value.length === 0){
        defineInputError('', target.value)
      }
      //number input//
      else {
        setCurrentAppState({
          ...currentAppState, 
          formErrors: {
            ...currentAppState.formErrors,
            [targetProperty]: 'incomplete'
          },
          creditCardInfo: {
            ...creditCardInfo,
            [propToChange]: newNumber
          }
        })
      }
    }
    //non-number input//
    else {
      switch (targetProperty) {
        case 'name':
          if(target.value.length > 5){
            defineInputError('complete', target.value)
          } else if(target.value.length === 0){
            defineInputError('complete', target.value)
          }else {
            defineInputError('incomplete', target.value)
          }
        break;
      
        case 'cvc': 
          if(target.value.length > 2 && !target.value.match(/[^$,.\d]/)){
            defineInputError('complete', target.value)
          } else if(target.value.length === 0){
            defineInputError('complete', target.value)
          }else {
            defineInputError('incomplete', target.value)
          }
        break;
  
      }
    }
  }

  return (
    <div className='input-container'>
        <label className='input-title'>{title}</label>
        <input onChange={(e)=>changeCardInformation(targetProperty, e)} className='input' type={type} placeholder={placeholder} maxLength={maxLenghtNumber}/>
        {
          currentAppState.formErrors[targetProperty] === 'incomplete' ? <p className="error-message">{error}</p> :
          currentAppState.formErrors[targetProperty] === 'complete' ? undefined :
          currentAppState.formErrors[targetProperty] === '' ? undefined :
          undefined
        }

    </div>
  )
}
