import { useContext, useState } from "react"
import { mainAppContext } from "../../context/MainAppContext"

export const InputTypeTwo = ({title, placeholderOne, placeholderTwo, errorOne, errorTwo, type, targetPropertyOne, targetPropertyTwo, maxLenghtNumber}) => {

  const {currentAppState, setCurrentAppState} = useContext(mainAppContext)
  const {creditCardInfo} = currentAppState;

  const defineInputError=(err, newValue, propToChangeTwo)=>{
    setCurrentAppState({
      ...currentAppState, 
      formErrors: {
        ...currentAppState.formErrors,
        [propToChangeTwo]: err
      },
      creditCardInfo: {
        ...creditCardInfo,
        [propToChangeTwo]: newValue
      }
    })
  }

  const changeCardInformation = (propToChange, {target})=>{
    switch (propToChange) {
      case 'month':
        if(target.value < 13 && !target.value.match(/[^$,.\d]/)){
          defineInputError('complete', target.value, 'month')
        } else {
          defineInputError('incomplete', target.value, 'month')
        }
      break;
    
      case 'year': 
        if(target.value < 100 && !target.value.match(/[^$,.\d]/)){
          defineInputError('complete', target.value, 'year')
        } else {
          defineInputError('incomplete', target.value, 'year')
        }
      break;

    }

    // console.log(creditCardInfo)
  }

  return (
    <div className='input-container type-two-container'>
        <label className='input-title'>{title}</label>
        <div className="double-input">
          <input className='input' onChange={(e)=>changeCardInformation(targetPropertyOne, e)} type={type} placeholder={placeholderOne} maxLength={maxLenghtNumber}/>
          <input className='input' onChange={(e)=>changeCardInformation(targetPropertyTwo, e)} type={type} placeholder={placeholderTwo} maxLength={maxLenghtNumber}/>

        </div>
        {
          currentAppState.formErrors[targetPropertyOne] === 'incomplete' ? <p className="error-message">{errorOne}</p> :
          currentAppState.formErrors[targetPropertyOne] === 'complete' ? undefined :
          currentAppState.formErrors[targetPropertyOne] === '' ? undefined :
          undefined
        }
        {
          currentAppState.formErrors[targetPropertyTwo] === 'incomplete' ? <p className="error-message">{errorTwo}</p> :
          currentAppState.formErrors[targetPropertyTwo] === 'complete' ? undefined :
          currentAppState.formErrors[targetPropertyTwo] === '' ? undefined :
          undefined
        }

    </div>
  )
}
