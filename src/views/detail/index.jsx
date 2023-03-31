import React, { memo } from "react"
import DetailInfors from "./c-cpns/detail-infos"
import DetailPictures from "./c-cpns/detail-pictures"
import { DetailWrapper } from "./style"

const Detail = memo(() => {
	return (
		<DetailWrapper>
			<DetailPictures />
			<DetailInfors />
		</DetailWrapper>
	)
})

export default Detail
