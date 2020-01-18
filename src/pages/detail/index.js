import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { actionCreators } from './store'
import { 
    DetailWrapper,
    Title,
    Content
 } from './style'

class Detail extends Component {
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Title>{ title }</Title>
                <Content>
                    <img src="" alt=""/>
                    <p>{ content }</p>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.action_getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
