import { useContext, useState } from "react"
import { mainAppContext } from "../../context/MainAppContext"

export const PurpleCard = () => {

  const {currentAppState} = useContext(mainAppContext)
  const {creditCardInfo} = currentAppState;
  const {number, name, month, year, cvc} = creditCardInfo
 
  return (
    <div className="purple-card card">

      <div className="purple-card-first">
        <img src="../../assets/images/card-logo.svg" alt="help" />
      </div>

      <div className="purple-card-second">
        <h1 className="purple-card-number">{number}</h1>
      </div>

      <div className="purple-card-third">
        <p className="user-name">{name}</p>
        <div className="purple-card-third-expiry">
          <p className="month">{month}</p>
          <p>/</p>
          <p className="year">{year}</p>
        </div>
      </div>

    </div>
  )
}
