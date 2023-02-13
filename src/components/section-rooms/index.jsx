import PropTypes from "prop-types"
import React, { memo } from "react"

import RoomItem from "@/components/room-item"
import { RoomsWrapper } from "./style"

const SectionRooms = memo(props => {
	const { roomList } = props
  console.log(roomList);
	return (
		<RoomsWrapper className="room-list">
			{roomList?.slice(0, 8).map(item => {
				return <RoomItem itemData={item} key={item.id} itemWidth={"25px"}></RoomItem>
			})}
		</RoomsWrapper>
	)
})

SectionRooms.propTypes = {
	roomList: PropTypes.array,
}

export default SectionRooms
