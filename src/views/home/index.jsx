import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import HomeBanner from "./c-cpns/home-banner"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"

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
				<HomeSectionV2 infoData={disCountInfo}/>
				<HomeSectionV1 infoData={goodPriceInfo}/>
				<HomeSectionV1 infoData={highScoreInfo}/>
			</div>
		</HomeWrapper>
	)
})

export default Home
