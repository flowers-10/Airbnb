import { Content } from "antd/es/layout/layout"
import PropTypes from "prop-types"
import React, { memo } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { IndicatorWrapper } from "./style"

const Indicator = memo(props => {
  const ContentRef = useRef()
	const { selectIndex } = props
	useEffect(() => {
    // 获取selectIndex对应的item
    const selectItemEl = ContentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 获取content的宽度
    const contentWidth = ContentRef.current.clientWidth

    // 获取selectIndex要滚动的距离
    const distance = itemLeft + itemWidth * 0.5 - contentWidth
    console.log(distance);

    ContentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])
	return (
		<IndicatorWrapper>
			<div className="i-content" ref={ContentRef}>{props.children}</div>
		</IndicatorWrapper>
	)
})

Indicator.propTypes = {
	selectIndex: PropTypes.number,
}

export default Indicator
