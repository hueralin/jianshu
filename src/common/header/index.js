import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
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

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    render() {
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
                        <CSSTransition in={this.state.focused} timeout={300} classNames='slide'>
                            <NavSearch onFocus={this.handleFocus} onBlur={this.handleBlur} className={this.state.focused ? 'focused' : ''} />
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont iconfangdajing' : 'iconfont iconfangdajing'}></i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'><i className='iconfont iconyumaobi'></i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    handleFocus() {
        this.setState({
            focused: true
        })
    }
    handleBlur() {
        this.setState({
            focused: false
        })
    }
}
