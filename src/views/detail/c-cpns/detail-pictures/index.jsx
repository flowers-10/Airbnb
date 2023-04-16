import React, { memo } from "react"
import { useSelector } from "react-redux"

import { PicturesWrapper } from "./style"
import PictureBrowser from "@/base-ui/picture-browser"
import { useState } from "react"

const DetailPictures = memo(props => {
	// 定义组件内部的状态
	const [showBrowser, setShowBrower] = useState(false)
	const { detailInfo } = useSelector(state => ({
		detailInfo: state.detail.detailInfo,
	}))
	return (
		<PicturesWrapper>
			<div className="pictures">
				<div className="left">
					<div className="item" onClick={e => setShowBrower(true)}>
						<img src={detailInfo.picture_urls?.[0]} alt="" />
						<div className="cover"></div>
					</div>
				</div>
				<div className="right">
					{detailInfo?.picture_urls?.slice(1, 5).map(item => {
						return (
							<div className="item" key={item} onClick={e => setShowBrower(true)}>
								<img src={item} alt="" />
								<div className="cover"></div>
							</div>
						)
					})}
				</div>
			</div>

			<div className="show-btn" onClick={e => setShowBrower(true)}>
				显示照片
			</div>
			{showBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeClick={e => setShowBrower(false)} />}
		</PicturesWrapper>
	)
})

DetailPictures.propTypes = {}

export default DetailPictures
