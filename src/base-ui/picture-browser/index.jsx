import IconClose from "@/assets/svg/icon-close"
import PropTypes from "prop-types"
import React, { memo } from "react"
import { useEffect } from "react"
import { BrowserWrapper } from "./style"

const PictureBrowser = memo(props => {
	const { pictureUrls, closeClick } = props

	useEffect(() => {
		document.body.style = "overflow:hidden"
	}, [])

	function closeBtnClickHandle() {
		if (closeClick) {
			closeClick()
		}
	}

	return (
		<BrowserWrapper>
			<div className="top">
				<div className="close-btn" onClick={e =>closeBtnClickHandle()} >
					<IconClose />
				</div>
			</div>
			<div className="list"></div>
			<div className="indicator"></div>
		</BrowserWrapper>
	)
})

PictureBrowser.propTypes = {
	pictureUrls: PropTypes.array,
}

export default PictureBrowser
