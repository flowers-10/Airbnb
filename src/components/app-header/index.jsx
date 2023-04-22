import React, { memo, useRef, useState } from "react"
import { shallowEqual, useSelector } from "react-redux"
import HeaderCenter from "./c-cpns/header-center"
import HeaderLeft from "./c-cpns/header-left"
import HeaderRight from "./c-cpns/header-right"
import { HeaderWrapper, SearchAreaPlaceholder } from "./style"
import classNames from "classnames"
import { useScrollPosition } from "@/hooks/useScrollPosition"

const AppHeader = memo(props => {
	//  定义组件内部状态
	const [isSearch, setIsSearch] = useState(false)
	// 从rudex中获取数据
	const { headerConfig } = useSelector(
		state => ({
			headerConfig: state.main.headerConfig,
		}),
		shallowEqual
	)
	const { isFixed } = headerConfig

	// 监听滚动
	const { scrollY } = useScrollPosition()
	const prevY = useRef(0)
	// 在正常情况下（搜索框弹出来时），不断记录当前滚动值
	if (!isSearch) prevY.current = scrollY
	// 在弹出搜索框的情况，滚动的距离大于之前记录的距离的30
	if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

	return (
		<HeaderWrapper className={classNames({ fixed: isFixed })}>
			<div className="content">
				<div className="top">
					<HeaderLeft />
					<HeaderCenter isSearch={isSearch} searchBarClick={e => setIsSearch(true)} />
					<HeaderRight />
				</div>
				<SearchAreaPlaceholder isSearch={isSearch} />
			</div>
			{isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
		</HeaderWrapper>
	)
})

export default AppHeader
