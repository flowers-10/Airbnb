import PropTypes from "prop-types"
import React, { memo } from "react"
import { useEffect, useState, useRef } from "react"
import { ViewWrapper } from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"

const ScrollView = memo(props => {
	// 定义内部状态
	const [showRight, setRight] = useState(false)
	const [showLeft, setLeft] = useState(false)
	const [posIndex, setPosIndex] = useState(0)

	const totalDistanceRef = useRef()
	// 组件渲染完毕判断是否显示右侧按钮
	const scrollContentRef = useRef()
	useEffect(() => {
		const scrollWidth = scrollContentRef.current?.scrollWidth
		const clientWidth = scrollContentRef.current?.clientWidth
		const totalDistance = scrollWidth - clientWidth
		setRight(totalDistance > 0)
		totalDistanceRef.current = totalDistance
	}, [props.children])

	// 事件处理逻辑
	function controlClickHandle(direction) {
		const newIndex = posIndex + direction
		const newEl = scrollContentRef.current.children[newIndex]
		const newOffsetLeft = newEl.offsetLeft
		scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
		setPosIndex(newIndex)
		setRight(totalDistanceRef.current > newOffsetLeft)
		setLeft(newOffsetLeft > 0)
	}

	return (
		<ViewWrapper>
			{showLeft && (
				<div className="control left" onClick={e => controlClickHandle(-1)}>
					<IconArrowLeft></IconArrowLeft>
				</div>
			)}
			{showRight && (
				<div className="control right" onClick={e => controlClickHandle(1)}>
					<IconArrowRight></IconArrowRight>
				</div>
			)}
			<div className="scroll">
				<div className="scroll-content" ref={scrollContentRef}>
					{props.children}
				</div>
			</div>
		</ViewWrapper>
	)
})

ScrollView.propTypes = {}

export default ScrollView
