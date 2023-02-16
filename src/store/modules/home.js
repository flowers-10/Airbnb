import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData } from "@/services"
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
		dispatch(changeHomeHotRecommendInfoAction(res.data))
	})
	getHomeLongforData().then(res => {
		// console.log(res.data);
		dispatch(changeLongforInforAction(res.data))
	})
})

const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		disCountInfo: {},
		hotRecommendInfo: {},
		longforInfo: {},
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
		changeLongforInforAction(state, { payload }) {
			state.longforInfo = payload
		},
	},
	// extraReducers: {
	// 	[fetchHomeDataAction.fulfilled](state, { payload }) {
	// 		state.goodPriceInfo = payload.HighScore
	// 	},
	// },
})

export const {
	changeGoodPriceInfoAction,
	changeHighScoreInfoAction,
	changeHomeDiscountInfoAction,
	changeHomeHotRecommendInfoAction,
	changeLongforInforAction,
} = homeSlice.actions

export default homeSlice.reducer
