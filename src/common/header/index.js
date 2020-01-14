import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
    HeaderWrapper, 
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    HotSearch,
    HotSearchTitle,
    HotSearchSwitch,
    HotSearchList,
    HotSearchItem
 } from './style.js'

class Header extends Component {
    render() {
        const { focused, handleFocus, handleBlur, hotSearchList } = this.props
        return (
            <HeaderWrapper>
                <Logo href='/'></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont iconAa'></i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={300} classNames='slide'>
                            <NavSearch onFocus={() => { handleFocus(hotSearchList) }} onBlur={handleBlur} className={focused ? 'focused' : ''} />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}></i>
                        { this.getHotSearchList(focused) }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'><i className='iconfont iconyumaobi'></i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getHotSearchList() {
        const { focused, hotSearchList, page, pageSize, handleMouseEnter, handleMouseLeave, mouseEnter, handleSwitch } = this.props
        if(focused || mouseEnter) {
            return (
                <HotSearch onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <HotSearchTitle>
                        热门搜索
                        <HotSearchSwitch onClick={() => handleSwitch(this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className='iconfont iconspin'></i>
                            换一批
                        </HotSearchSwitch>
                    </HotSearchTitle>
                    <HotSearchList>
                        {
                            hotSearchList.slice((page-1)*pageSize, page*pageSize).map((item) => {
                                return <HotSearchItem key={item}>{item}</HotSearchItem>
                            })
                        }
                    </HotSearchList>
                </HotSearch>
            )
        } else {
            return null
        }
    }
} 

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        hotSearchList: state.getIn(['header', 'hotSearchList']),
        page: state.getIn(['header', 'page']),
        pageSize: state.getIn(['header', 'pageSize']),
        mouseEnter: state.getIn(['header', 'mouseEnter'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list) {
            // 获取hotsSearch列表
            (list.size > 0) || dispatch(actionCreators.getHotSearchList())
            // input框聚焦
            dispatch(actionCreators.searchFocused())
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleSwitch(spin) {
            // 提取角度
            let originAngle = Number(spin.style.transform.replace(/[^0-9]/ig, ''))
            spin.style.transform = 'rotate(' + (originAngle+360) + 'deg)'
            dispatch(actionCreators.pageSwitch())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
