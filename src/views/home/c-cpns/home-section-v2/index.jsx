import PropTypes from "prop-types"
import React, { memo, useState, useCallback } from "react"

import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionTabs from "@/components/section-tabs"
import { SectionV2Warpper } from "./style"

const HomeSectionV2 = memo(props => {
	const { infoData } = props
	const [cityName, currentCityName] = useState("佛山")

	const tabClickHandle = useCallback(e => {
		currentCityName(e)
	}, [])
	const tabNames = infoData.dest_address?.map(item => item.name)
	return (
		<SectionV2Warpper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<SectionTabs tabNames={tabNames ?? []} tabClick={tabClickHandle} />
			<SectionRooms roomList={infoData.dest_list?.[cityName]} itemWidth="33.3333%" />
		</SectionV2Warpper>
	)
})

HomeSectionV2.propTypes = {
	infoData: PropTypes.object,
}

export default HomeSectionV2
