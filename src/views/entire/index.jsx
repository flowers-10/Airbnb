import React, { memo } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  // 发送网络请求，获取数据，保存页码

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms roomList/>
      <EntirePagination currentPage/>
    </EntireWrapper>
  )
})

export default Entire