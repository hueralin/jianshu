import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    RecommendWraper,
    RecommendItem
} from '../style'

class Recommend extends Component {
    render() {
        const { recommends } = this.props
        return (
            <RecommendWraper>
                {
                    recommends.map(item => {
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
                    })
                }
            </RecommendWraper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommends: state.getIn(['home', 'recommends'])
    }
}

export default connect(mapStateToProps, null)(Recommend)
