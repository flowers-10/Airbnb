import PropTypes from "prop-types"
import React, { memo } from "react"
import { FooterWarpper } from "./style"

import IconMoreArrow from "@/assets/svg/icon-more-arrow"
import { useNavigate } from "react-router-dom"

const SectionFooter = memo(props => {
	const { name } = props

	// 时间处理逻辑
	const navigate = useNavigate()
	function moreClickHandle() {
		 navigate("/entire")
	}

	return (
		<FooterWarpper color={name ? "#00848a" : "#000"} >
			<div className="info" onClick={moreClickHandle}>
				<span className="text">{name ? `查看更多${name}房源` : "显示全部"}</span>
				<IconMoreArrow></IconMoreArrow>
			</div> 
		</FooterWarpper>
	)
})

SectionFooter.propTypes = {
	name: PropTypes.string,
}

export default SectionFooter
