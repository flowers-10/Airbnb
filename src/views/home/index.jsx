import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import HomeBanner from "./c-cpns/home-banner"
import { fetchHomeDataAction } from "@/store/modules/home"
import { HomeWrapper } from "./style"
import  HomeSectionV1  from "./c-cpns/home-section-v1"

const Home = memo(() => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeDataAction())
	}, [dispatch])
	const { goodPriceInfo, highScoreInfo } = useSelector(state => {
		return {
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.highScoreInfo,
		}
	}, shallowEqual)
	return (
		<HomeWrapper>
			<HomeBanner></HomeBanner>

			<div className="content">
				<HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
				<HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
			</div>
		</HomeWrapper>
	)
})

export default Home
