import React, { Component } from 'react'
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
                        <NavSearch />
                        <i className='iconfont iconfangdajing'></i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'><i className='iconfont iconyumaobi'></i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
