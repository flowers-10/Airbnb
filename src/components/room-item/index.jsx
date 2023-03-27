import PropTypes from "prop-types"
import React, { memo } from "react"
import { Rate } from "antd"
import { ItemWrapper } from "./style"
import { Carousel } from "antd"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import { useRef } from "react"
import Indicator from "@/base-ui/indicator"
import { useState } from "react"
import classNames from "classnames"

const RoomItem = memo(props => {
	const { itemData, itemWidth = "48%" } = props
	const [selectIndex, setSelectIndex] = useState(0)
	const sliderRef = useRef()
	// 处理事件逻辑
	function controlClickHandle(isRight = true) {
		isRight ? sliderRef.current.next() : sliderRef.current.prev()

		// 拿到最新的索引 
		let newIndex =isRight ? selectIndex + 1 : selectIndex - 1
		const len = itemData.picture_urls.length
		if(newIndex  <0) newIndex = len - 1
		if(newIndex > len -1) newIndex  = 0
		setSelectIndex(newIndex)
	}

	return (
		<ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} itemWidth={itemWidth}>
			<div className="inner">
				<div className="slider">
					<div className="control">
						<div className="btn left" onClick={e => controlClickHandle(false)}>
							<IconArrowLeft width="30" height="30" />
						</div>
						<div className="btn right" onClick={e => controlClickHandle(true)}>
							<IconArrowRight width="30" height="30" />
						</div>
					</div>
					<div className="indicator">
						<Indicator selectIndex={selectIndex}>
							{itemData?.picture_urls?.map((item, index) => {
								return (
									<div className="item" key={index}>
										<span className={classNames("dot", { active: selectIndex === index, activeSmall:selectIndex - 3 === index || selectIndex+3 === index })}></span>
									</div>
								)
							})}
						</Indicator>
					</div>
					<Carousel dots={false} ref={sliderRef}>
						{itemData?.picture_urls?.map(item => {
							return (
								<div className="cover" KEY={item}>
									<img src={item} alt="" />
								</div>
							)
						})}
					</Carousel>
				</div>
				<div className="desc">{itemData.verify_info.messages.join("·")}</div>
				<div className="name">{itemData.name}</div>
				<div className="price">¥{itemData.price}/晚</div>
				<div className="bottom">
					<Rate
						className="rate"
						disabled
						defaultValue={itemData.star_rating}
						allowHalf={true}
						style={{ color: "#00848a", fontSize: "10px" }}
					/>
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
