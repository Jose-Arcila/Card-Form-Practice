import React from 'react'
import { PurpleCard } from './LeftSide/PurpleCard'
import { BacksideCard } from './LeftSide/BacksideCard'

export const LeftSide = () => {
  return (
    <div className='left-side-container side-container'>
        <PurpleCard />
        <BacksideCard />
    
    </div>
  )
}
