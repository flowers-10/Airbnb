import React, { memo, useState } from "react"
import { shallowEqual, useSelector } from "react-redux"
import HeaderCenter from "./c-cpns/header-center"
import HeaderLeft from "./c-cpns/header-left"
import HeaderRight from "./c-cpns/header-right"
import { HeaderWrapper, SearchAreaPlaceholder } from "./style"
import classNames from "classnames"

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
	console.log(isFixed)
	return (
		<HeaderWrapper className={classNames({ fixed: isFixed })}>
			<div className="content">
				<div className="top">
					<HeaderLeft />
					<HeaderCenter  isSearch={isSearch} searchBarClick={e => setIsSearch(true)}/>
					<HeaderRight />
				</div>
				<SearchAreaPlaceholder isSearch={isSearch}/>
			</div>
			{isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
		</HeaderWrapper>
	)
})

export default AppHeader
