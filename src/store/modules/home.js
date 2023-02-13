import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
	getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res.data))
  })
	getHomeHighScoreData().then(res => {
    console.log(res.data);
    dispatch(changeHighScoreInfoAction(res.data))
  })
})

const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
    highScoreInfo: {}
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload
		},
    changeHighScoreInfoAction(state, { payload }) {
			state.highScoreInfo = payload
		},
	},
	// extraReducers: {
	// 	[fetchHomeDataAction.fulfilled](state, { payload }) {
	// 		state.goodPriceInfo = payload.HighScore
	// 	},
	// },
})

export const { changeGoodPriceInfoAction,changeHighScoreInfoAction } = homeSlice.actions

export default homeSlice.reducer
