import React, { memo, useEffect } from "react"
import { useDispatch } from "react-redux"
import EntireFilter from "./c-cpns/entire-filter"
import EntirePagination from "./c-cpns/entire-pagination"
import EntireRooms from "./c-cpns/entire-rooms"
import { EntireWrapper } from "./style"
import { fetchEntireDataAction } from "@/store/modules/entire/actionCreators"

const Entire = memo(() => {
	// 发送网络请求，获取数据，保存页码

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchEntireDataAction())
	}, [dispatch])


	return (
		<EntireWrapper>
			<EntireFilter />
			<EntireRooms roomList />
			<EntirePagination currentPage />
		</EntireWrapper>
	)
})

export default Entire
