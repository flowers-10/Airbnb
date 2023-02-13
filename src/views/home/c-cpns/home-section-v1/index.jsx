import PropTypes from "prop-types"
import React, { memo } from "react"

import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"

import { SectionV1Warpper } from "./style"

const HomeSectionV1 = memo(props => {
	const { infoData } = props
	return (
		<SectionV1Warpper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
			<SectionRooms roomList={infoData.list}></SectionRooms>
		</SectionV1Warpper>
	)
})

HomeSectionV1.propTypes = {
	infoData: PropTypes.object,
}

export default HomeSectionV1
