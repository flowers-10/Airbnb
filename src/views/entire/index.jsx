import React, { memo, useEffect } from "react"
import EntireFilter from "./c-cpns/entire-filter"
import EntirePagination from "./c-cpns/entire-pagination"
import EntireRooms from "./c-cpns/entire-rooms"
import { EntireWrapper } from "./style"
import { useDispatch, useSelector } from "react-redux"
import { fetchHomeDataAction } from "@/store/modules/home"

const Entire = memo(() => {
	// 发送网络请求，获取数据，保存页码
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchHomeDataAction())
	}, [dispatch])

	const { currentPage, roomList, totalCount } = useSelector(state => {
		return {
			currentPage: state.entire.currentPage,
			roomList: state.entire.roomList,
			totalCount: state.entire.totalCount,
		}
	})

  console.log(currentPage,roomList,totalCount);

	return (
		<EntireWrapper>
			<EntireFilter />
			<EntireRooms roomList />
			<EntirePagination currentPage />
		</EntireWrapper>
	)
})

export default Entire
