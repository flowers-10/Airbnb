import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData } from "@/services"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
	getHomeGoodPriceData().then(res => {
		dispatch(changeGoodPriceInfoAction(res.data))
	})
	getHomeHighScoreData().then(res => {
		dispatch(changeHighScoreInfoAction(res.data))
	})
	getHomeDiscountData().then(res => {
		console.log(res.data);
		dispatch(changeHomeDiscountInfoAction(res.data))
	})
})

const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		disCountInfo: {},
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
	},
	// extraReducers: {
	// 	[fetchHomeDataAction.fulfilled](state, { payload }) {
	// 		state.goodPriceInfo = payload.HighScore
	// 	},
	// },
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeHomeDiscountInfoAction } = homeSlice.actions

export default homeSlice.reducer
