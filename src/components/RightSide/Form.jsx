import { useContext, useEffect, useState } from "react"
import { mainAppContext } from "../../context/MainAppContext"
import { InputTypeOne } from "./InputTypeOne"
import { InputTypeTwo } from "./InputTypeTwo"


export const Form = () => {

    const [isThisWrong, setIsThisWrong] = useState(false)

    const {currentAppState, setCurrentAppState} = useContext(mainAppContext)
    const {isFormCorrect, formErrors} = currentAppState

    const checkFormErrors=()=>{
        let formErrorsArray = Object.values(formErrors);

        if (formErrorsArray.every(v=> v === 'complete')) {
            setCurrentAppState({
                ...currentAppState,
                isFormCorrect: true
            })
        } else {
            setCurrentAppState({
                ...currentAppState,
                isFormCorrect: false
            })
        }
    }

    useEffect(() => {
        checkFormErrors()

    }, [formErrors])

    const submitForm=(e)=>{
        e.preventDefault()
        if(isFormCorrect) {
            setCurrentAppState({
                ...currentAppState,
                isFormSubmitted: true
            })
        } else {
            setIsThisWrong(true)
            setTimeout(() => {
                setIsThisWrong(false)
            }, 3000);
        }
    }
    
  return (
    <form className="form" onSubmit={(e)=>submitForm(e)}>
        <InputTypeOne 
            title={'Cardholder Name'}
            placeholder={'e.g. Jane Appleseed'}
            type={'text'}
            targetProperty={'name'}
            maxLenghtNumber={24}
            error={'Name should be at least 6 characters long.'}
        />

        <InputTypeOne 
            title={'Card Number'}
            placeholder={'e.g 1234 5678 9123 0000'}
            type={'text'}
            targetProperty={'number'}
            isThisNumber={true}
            maxLenghtNumber={16}
            error={'Your number must be 16 characters long and contain no letters or special characters.'}
        />

        <div className="bottom-form-container">
            <InputTypeTwo 
                title={'Exp. Date (MM/YY)'}
                placeholderOne={'MM'}
                placeholderTwo={'YY'}
                type={'text'}
                targetPropertyOne={'month'}
                targetPropertyTwo={'year'}
                maxLenghtNumber={2}
                errorOne={'Value cant be higher than 12'}
                errorTwo={'Value cant be higher than 99'}
            />
            <InputTypeOne 
                title={'CVC'}
                placeholder={'e.g 123'}
                type={'text'}
                maxLenghtNumber={3}
                targetProperty={'cvc'}
                error={'Your number must be at least three numbers with no letters or special characters.'}

            />
        </div>

        <input className="button" type="submit" value='Confirm'/>
        {
            isThisWrong && <p style={{marginTop: '-10' + 'px'}} className="error-message">Please complete the form before submitting.</p>
        }

    </form>
  )
}
