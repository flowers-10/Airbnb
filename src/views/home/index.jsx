import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import HomeBanner from "./c-cpns/home-banner"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import HomeSectionV1 from "./c-cpns/home-section-v1"

const Home = memo(() => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeDataAction())
	}, [dispatch])
	const { goodPriceInfo, highScoreInfo, disCountInfo } = useSelector(state => {
		return {
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
			disCountInfo: state.home.disCountInfo,
		}
	}, shallowEqual)
	return (
		<HomeWrapper>
			<HomeBanner></HomeBanner>
			<div className="content">
			<div className="">
				<SectionHeader title={disCountInfo.title} subtitle={disCountInfo.subtitle}></SectionHeader>
				<SectionRooms roomList={disCountInfo.dest_list?.["成都"]} itemWidth="33.3333%"></SectionRooms>
			</div>
				<HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
				<HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
			</div>
		</HomeWrapper>
	)
})

export default Home
