import React, { memo } from 'react'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className='filter'>filter-section</div>
      <div className='room'>room-section</div>
      <div className='pageination'>pageination-section</div>
    </EntireWrapper>
  )
})

export default Entire