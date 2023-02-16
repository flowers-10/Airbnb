import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import store from "./store"
import App from "@/App"
import "normalize.css"
import 'antd/dist/reset.css';
import "./assets/css/index.less"
import theme from "./assets/theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<Suspense fallback={<div>loading...</div>}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Suspense>
	</Provider>

	// </React.StrictMode>
)
