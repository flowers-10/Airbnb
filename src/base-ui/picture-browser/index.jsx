import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {

  useEffect(() => {
    document.body.style = "overflow:hidden"
  },[])

  return (
    <BrowserWrapper>PicrtureBrowser</BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser