import PropTypes from "prop-types"
import React, { memo } from "react"
import { LongforWarpper } from "./style"
import SectionHeader from "@/components/section-header"
import LongforItem from "@/components/longfor-item"
import ScrollView from "@/base-ui/scroll-view"

const HomeLongfor = memo(props => {
	const { infoData } = props
	return (
		<LongforWarpper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
        {
          infoData.list.map(item => (
            <LongforItem itemData={item} key={item.city}></LongforItem>
          ))
        }
        </ScrollView>
      </div>
		</LongforWarpper>
	)
})

HomeLongfor.propTypes = {
	infoData: PropTypes.object,
}

export default HomeLongfor
