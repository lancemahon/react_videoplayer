import React from 'react'
import StyledNightmode from './styled/StyledNightmode'

const NightMode = ({ nightModeCallback, nightMode }) => {
  return (
    <StyledNightmode>
      <span>Nightmode: </span>
      <label className='switch'>
        <input type='checkbox' checked={nightMode} onChange={nightModeCallback} />
        <span className='slider round' />
      </label>
    </StyledNightmode>
  )
}

export default NightMode
