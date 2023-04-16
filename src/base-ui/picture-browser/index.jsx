import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import IconClose from "@/assets/svg/icon-close"
import PropTypes from "prop-types"
import React, { memo } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { BrowserWrapper } from "./style"

const PictureBrowser = memo(props => {
	const { pictureUrls, closeClick } = props

	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		document.body.style = "overflow:hidden"
	}, [])

	function closeBtnClickHandle() {
		if (closeClick) {
			closeClick()
		}
	}

	function controlClickHandle(isNext = true) {
		let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
		if (newIndex < 0) newIndex = pictureUrls.length - 1
		if (newIndex > pictureUrls.length - 1) newIndex = 0
		setCurrentIndex(newIndex)
	}

	return (
		<BrowserWrapper>
			<div className="top">
				<div className="close-btn" onClick={e => closeBtnClickHandle()}>
					<IconClose />
				</div>
			</div>
			<div className="slider">
				<div className="control">
					<div className="btn left" onClick={e => controlClickHandle(false)} >
						<IconArrowLeft width="77" height="77" />
					</div>
					<div className="picture">
						<img src={pictureUrls[currentIndex]} alt="" />
					</div>
					<div className="btn right" onClick={e => controlClickHandle(true)}>
						<IconArrowRight width="77" height="77"  />
					</div>
				</div>
			</div>
			<div className="preview"></div>
		</BrowserWrapper>
	)
})

PictureBrowser.propTypes = {
	pictureUrls: PropTypes.array,
}

export default PictureBrowser
