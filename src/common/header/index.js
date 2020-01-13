import React from 'react'
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
    SearchWrapper
 } from './style.js'

const Header = (props) => {
    const { focused, handleFocus, handleBlur } = props
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
                        <NavSearch onFocus={handleFocus} onBlur={handleBlur} className={focused ? 'focused' : ''} />
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}></i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writing'><i className='iconfont iconyumaobi'></i>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
} 

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.searchFocused())
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
