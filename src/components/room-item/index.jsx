import PropTypes from "prop-types"
import React, { memo } from "react"
import { Rate } from "antd"
import { ItemWrapper } from "./style"

const RoomItem = memo(props => {
	const { itemData } = props

	return (
		<ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
			<div className="inner">
				<div className="cover">
					<img src={itemData.picture_url} alt="" />
				</div>
				<div className="desc">{itemData.verify_info.messages.join("·")}1</div>
				<div className="name">{itemData.name}</div>
				<div className="price">¥{itemData.price}/晚</div>
				<div className="bottom">
					<Rate className="rate" disabled defaultValue={itemData.star_rating} allowHalf={true} style={{color:"#00848a",fontSize:"10px"}}/>
					<span className="count">{itemData.reviews_count}</span>
					{itemData.bottom_info && <span>·{itemData.bottom_info.content}</span>}
				</div>
			</div>
		</ItemWrapper>
	)
})

RoomItem.propTypes = {
	itemData: PropTypes.object,
}

export default RoomItem
