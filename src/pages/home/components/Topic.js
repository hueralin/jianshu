// 专题组件
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
    TopicWrapper,
    TopicItem
} from '../style.js'

class Topic extends Component {
    componentDidMount() {
        this.props.dispatch(actionCreators.action_getTopics())
    }
    render() {
        const { topics } = this.props
        return (
            <TopicWrapper>
                {
                    topics.map(item => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt={item.get('title')}/>{item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.getIn(['home', 'topics'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
