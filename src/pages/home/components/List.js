import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    ListItem,
    ListInfo
} from '../style.js'

class Recommend extends Component {
    render() {
        const { articles } = this.props
        return (
            <Fragment>
            {
                articles.map(item => {
                    return (
                        <ListItem key={item.get('id')}>
                            <img src={item.get('imgUrl')} alt=""/>
                            <ListInfo>
                                <h3>{item.get('title')}</h3>
                                <p>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })
            }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.getIn(['home', 'articles'])
    }
}

export default connect(mapStateToProps, null)(Recommend)
