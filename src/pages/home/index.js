import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style.js'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4875/3dae632b6c239e140469e4ffe7069a78db136bed.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="鼠年大吉"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home
