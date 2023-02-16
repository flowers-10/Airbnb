import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData } from "@/services"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
	getHomeGoodPriceData().then(res => {
		dispatch(changeGoodPriceInfoAction(res.data))
	})
	getHomeHighScoreData().then(res => {
		dispatch(changeHighScoreInfoAction(res.data))
	})
	getHomeDiscountData().then(res => {
		dispatch(changeHomeDiscountInfoAction(res.data))
	})
	getHomeHotRecommendData().then(res => {
		console.log(res.data);
		dispatch(changeHomeHotRecommendInfoAction(res.data))
	})
})

const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		disCountInfo: {},
		hotRecommendInfo: {},
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload
		},
		changeHighScoreInfoAction(state, { payload }) {
			state.highScoreInfo = payload
		},
		changeHomeDiscountInfoAction(state, { payload }) {
			state.disCountInfo = payload
		},
		changeHomeHotRecommendInfoAction(state, { payload }) {
			state.hotRecommendInfo = payload
		},
	},
	// extraReducers: {
	// 	[fetchHomeDataAction.fulfilled](state, { payload }) {
	// 		state.goodPriceInfo = payload.HighScore
	// 	},
	// },
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeHomeDiscountInfoAction,changeHomeHotRecommendInfoAction } = homeSlice.actions

export default homeSlice.reducer
