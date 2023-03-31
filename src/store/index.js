import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './modules/home'
// import entireReducer from './modules/entire'
import detailReducer from "./modules/detial"
import entireReducer from "./modules/entire/index"

const store = configureStore({
  reducer: {
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer
  }
})

export default store