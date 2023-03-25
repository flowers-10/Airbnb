import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"

const EntireFilter = memo((props) => {
  return (
    <FilterWrapper>
      {
        filterData.map((item,index) => {
          return (
            <div className="item" key={index}>{item} </div>
          )
        })
      }
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter