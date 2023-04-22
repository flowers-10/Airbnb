import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "./modules/main"
import homeReducer from './modules/home'
import detailReducer from "./modules/detial"
import entireReducer from "./modules/entire/index"

const store = configureStore({
  reducer: {
    main: mainReducer,
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer
  }
})

export default store