import RoomItem from "@/components/room-item"
import { changeDetailInfoAction } from "@/store/modules/detial"
import React, { memo, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RoomsWrapper } from "./style"

const EntireRooms = memo(props => {
	// 从redux中获取roomlist数据
	const { roomList, totalCount, isLoading } = useSelector(state => {
		return {
			roomList: state.entire.roomList,
			totalCount: state.entire.totalCount,
			isLoading: state.entire.isLoading,
		}
	})

	// 事件处理
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const itemClickHandle = useCallback(
		item => {
			// console.log(item)
			dispatch(changeDetailInfoAction(item))
			navigate("/detail")
		},
		[navigate, dispatch]
	)

	return (
		<RoomsWrapper>
			<h2 className="title">共{totalCount}多处住所</h2>
			<div className="list">
				{roomList.map(item => {
					return <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={itemClickHandle} />
				})}
			</div>
			{isLoading && <div className="cover"></div>}
		</RoomsWrapper>
	)
})

EntireRooms.propTypes = {}

export default EntireRooms
