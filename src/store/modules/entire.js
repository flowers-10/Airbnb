import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getEntireRoomList } from "@/services/modules/entire"

export const fetchEntrieDataAction = createAsyncThunk("featchdata", async (payload, { dispatch }) => {
  getEntireRoomList(0).then(res => {
    dispatch(changeCurrentPageAction(0))
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  })
})

const entrieSlice = createSlice({
	name: "entrie",
	initialState: {
		currentPage: 0, //当前页码
		roomList: [], //房间列表
		totalCount: 0, //总页码
	},
	reducers: {
		changeCurrentPageAction(state, { payload }) {
			state.currentPage = payload
		},
		changeRoomListAction(state, { payload }) {
			state.roomList = payload
		},
		changeTotalCountAction(state, { payload }) {
			state.totalCount = payload
		},
	},
})

export const { changeCurrentPageAction, changeRoomListAction, changeTotalCountAction } = entrieSlice.actions

export default entrieSlice.reducer
