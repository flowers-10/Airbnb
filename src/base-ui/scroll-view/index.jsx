import PropTypes from "prop-types"
import React, { memo } from "react"
import { useEffect, useState, useRef } from "react"
import { ViewWrapper } from "./style"

const ScrollView = memo(props => {
	// 定义内部状态
	const [showRight, setRight] = useState(false)
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
	function rightClickHandle() {
		const newIndex = posIndex + 1
		const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft

		scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
		setPosIndex(newIndex)
    setRight(totalDistanceRef.current > newOffsetLeft)
	}
	function leftClickHandle() {
		const newIndex = posIndex - 1
		const newEl = scrollContentRef.current.children[newIndex]
		if (newEl) {
			scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`
			setPosIndex(newIndex)
		}
	}
	return (
		<ViewWrapper>
			<button onClick={leftClickHandle}>左边按钮</button>
			{showRight && <button onClick={rightClickHandle}>右边按钮</button>}

			<div className="scroll-content" ref={scrollContentRef}>
				{props.children}
			</div>
		</ViewWrapper>
	)
})

ScrollView.propTypes = {}

export default ScrollView
