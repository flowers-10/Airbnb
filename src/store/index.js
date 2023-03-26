import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './modules/home'
// import entireReducer from './modules/entire'
import entireReducer from "./modules/entire/index"

const store = configureStore({
  reducer: {
    home:homeReducer,
    entire:entireReducer
  }
})

export default store