import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import HomeBanner from "./c-cpns/home-banner"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeLongfor from "./c-cpns/home-longfor"
import { isEmptyO } from "@/utlis"

const Home = memo(() => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchHomeDataAction())
	}, [dispatch])

	const { goodPriceInfo, highScoreInfo, disCountInfo, hotRecommendInfo, longforInfo } = useSelector(state => {
		return {
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
			disCountInfo: state.home.disCountInfo,
			hotRecommendInfo: state.home.hotRecommendInfo,
			longforInfo: state.home.longforInfo,
		}
	}, shallowEqual)

	return (
		<HomeWrapper>
			<HomeBanner></HomeBanner>
			<div className="content">
				{isEmptyO(disCountInfo) && <HomeSectionV2 infoData={disCountInfo} />}
				{isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />}
				{isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
				{isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
				{isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home
