import { useContext, useState } from "react"
import { mainAppContext } from "./context/MainAppContext"
import { LeftSide } from "./components/LeftSide"
import { RightSide } from "./components/RightSide"

export const App = () => {

  const [currentAppState, setCurrentAppState] = useState({
    creditCardInfo: {
      number: '0000 0000 0000 0000',
      name: 'Jane Appleseed',
      month: '00',
      year: '00',
      cvc: '000'
    },
    isFormCorrect: false,
    isFormSubmitted: false,
    formErrors: {
      name: '',
      number: '',
      month: '',
      year: '',
      cvc: ''
    }
  })

  const {creditCardInfo, isFormCorrect, formErrors} = currentAppState

  return (
    <div className="main-wrapper">

      <mainAppContext.Provider value={{currentAppState, setCurrentAppState}}>
        <LeftSide />
        <RightSide />
      </mainAppContext.Provider>
      
    </div>
  )
}
