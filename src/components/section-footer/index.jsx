import PropTypes from "prop-types"
import React, { memo } from "react"
import { FooterWarpper } from "./style"

import IconMoreArrow from "@/assets/svg/icon-more-arrow"

const SectionFooter = memo(props => {
	const { name } = props

	return (
		<FooterWarpper color={name ? "#00848a" : "#000"}>
			<div className="info">
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
