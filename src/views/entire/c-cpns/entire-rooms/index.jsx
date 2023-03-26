import RoomItem from "@/components/room-item"
import React, { memo } from "react"
import { useSelector } from "react-redux"
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

	return (
		<RoomsWrapper>
			<h2 className="title">共{totalCount}多处住所</h2>
			<div className="list">
				{roomList.map(item => {
					return <RoomItem itemData={item} itemWidth="20%" key={item._id} />
				})}
			</div>
			{isLoading && <div className="cover"></div>}
		</RoomsWrapper>
	)
})

EntireRooms.propTypes = {}

export default EntireRooms
