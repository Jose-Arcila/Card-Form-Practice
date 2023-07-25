import React, { useContext } from 'react'
import { mainAppContext } from '../../context/MainAppContext'

export const BacksideCard = () => {

  const {currentAppState} = useContext(mainAppContext)
  const {creditCardInfo} = currentAppState

  return (
    <div className='backside-card card'>
        <p className='cvc-number'>{creditCardInfo.cvc}</p>
    </div>
  )
}
