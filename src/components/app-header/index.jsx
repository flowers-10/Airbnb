import React, { memo, useEffect, useRef, useState } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaPlaceholder } from './style'

const AppHeader = memo((props) => {
  
  

  

  return (

      <HeaderWrapper >
        <div className='content'>
          <div className='top'>
            <HeaderLeft/>
            <HeaderCenter />
            <HeaderRight/>
          </div>
          <SearchAreaPlaceholder />
        </div>
        </HeaderWrapper>

  )
})

export default AppHeader