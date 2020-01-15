import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style.js'

class Home extends Component {
    componentDidMount() {
        this.props.GetHomeData()
        window.addEventListener('scroll', this.props.handleToggleBackScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.handleToggleBackScroll)
    }
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
                { this.props.showScroll ? <BackTop onClick={this.handleToTop}>顶部</BackTop> : null }
            </HomeWrapper>
        )
    }
    handleToTop() {
        window.scrollTo(0, 0)
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetHomeData() {
            dispatch(actionCreators.action_getHomeData())
        },
        handleToggleBackScroll(e) {
            if(document.documentElement.scrollTop > 400) {
                dispatch(actionCreators.action_toggleBackScroll(true))
            } else {
                dispatch(actionCreators.action_toggleBackScroll(false))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
