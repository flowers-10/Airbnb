import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import HomeBanner from "./c-cpns/home-banner"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeSectionV3 from "./c-cpns/home-section-v3"
import HomeLongfor from "./c-cpns/home-longfor"
import { isEmptyO } from "@/utlis"
import { changeHeaderConfigAction } from "@/store/modules/main"

const Home = memo(() => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchHomeDataAction())
		dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:true}))
	}, [dispatch])

	const { goodPriceInfo, highScoreInfo, disCountInfo, hotRecommendInfo, longforInfo, plusInfo } = useSelector(state => {
		return {
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
			disCountInfo: state.home.disCountInfo,
			hotRecommendInfo: state.home.hotRecommendInfo,
			longforInfo: state.home.longforInfo,
			plusInfo: state.home.plusInfo,
		}
	}, shallowEqual)

	return (
		<HomeWrapper>
			<HomeBanner></HomeBanner>
			<div className="content">
				{isEmptyO(disCountInfo) && <HomeSectionV2 infoData={disCountInfo} />}
				{isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />}
				{isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
				{isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
				{isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}

				{isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home
