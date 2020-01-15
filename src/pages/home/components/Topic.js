// 专题组件
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from '../style.js'

class Topic extends Component {
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

export default connect(mapStateToProps, null)(Topic)
