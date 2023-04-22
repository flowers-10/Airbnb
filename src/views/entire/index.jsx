import React, { memo, useEffect } from "react"
import { useDispatch } from "react-redux"
import EntireFilter from "./c-cpns/entire-filter"
import EntirePagination from "./c-cpns/entire-pagination"
import EntireRooms from "./c-cpns/entire-rooms"
import { EntireWrapper } from "./style"
import { fetchEntireDataAction } from "@/store/modules/entire/actionCreators"
import { changeHeaderConfigAction } from "@/store/modules/main"

const Entire = memo(() => {
	// 发送网络请求，获取数据，保存页码

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchEntireDataAction())
		dispatch(changeHeaderConfigAction({isFixed:true}))
	}, [dispatch])


	return (
		<EntireWrapper>
			<EntireFilter/>
			<EntireRooms/>
			<EntirePagination/>
		</EntireWrapper>
	)
})

export default Entire
