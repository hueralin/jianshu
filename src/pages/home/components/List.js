import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style.js'

class Recommend extends Component {
    render() {
        const { articles, getMoreList, page } = this.props
        return (
            <Fragment>
            {
                articles.map(item => {
                    return (
                        <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                <img src={item.get('imgUrl')} alt=""/>
                                <ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })
            }
            <LoadMore onClick={() => { getMoreList(page) }}>阅读更多</LoadMore>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.getIn(['home', 'articles']),
        page: state.getIn(['home', 'articlePage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(actionCreators.action_getMoreList(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
