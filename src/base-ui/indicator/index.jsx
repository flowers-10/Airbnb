import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  return (
    <IndicatorWrapper>
      <div className="i-content">
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {}

export default Indicator