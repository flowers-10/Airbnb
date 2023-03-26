import React, { memo } from "react"
import { PaginationWrapper } from "./style"
import { Pagination } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { fetchEntireDataAction } from "@/store/modules/entire/actionCreators"

const EntirePagination = memo(props => {
	const { totalCount, currentPage, roomList } = useSelector(state => ({
		totalCount: state.entire.totalCount,
		currentPage: state.entire.currentPage,
		roomList: state.entire.roomList,
	}))
	const startCount = currentPage * 20 + 1
	const endCount = (currentPage + 1) * 20

  // 事件处理逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(page,pageSize) {
    // 回到顶部
    window.scrollTo(0,0)
    // 更新最新页码 redux => currentPages
    // console.log(page);
    // dispatch(changeCurrentPageAction(page-1))
    dispatch(fetchEntireDataAction(page-1))
  }
	return (
		<PaginationWrapper>
			{ !!roomList.length && (
				<div className="info">
					<Pagination className="dePag" defaultCurrent={1} total={300} defaultPageSize={20} pageSize={20} onChange={ pageChangeHandle}/>
					<div className="desc">
						第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
					</div>
				</div>
			)}
		</PaginationWrapper>
	)
})

export default EntirePagination
