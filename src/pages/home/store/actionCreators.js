import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const getTopics = (data) => {
    return {
        type: constants.GET_TOPICS,
        data
    }
}

const getArticles = (data) => {
    return {
        type: constants.GET_ARTICLES,
        data
    }
}

const getRecommends = (data) => {
    return {
        type: constants.GET_RECOMMENDS,
        data
    }
}

const getHomeData = (data) => {
    return {
        type: constants.GET_HOME_DATA,
        topics: data.topics,
        articles: data.articles,
        recommends: data.recommends
    }
}

const getMoreList = (data, articlePage) => {
    return {
        type: constants.GET_MORE_LIST,
        articles: fromJS(data),
        articlePage
    }
}

export const action_getTopics = () => {
    return (dispatch) => {
        axios.get('/api/topics.json')
        .then(res => {
            const data = res.data.data
            dispatch(getTopics(data.list))
        })
    }
}

export const action_getArticles = () => {
    return (dispatch) => {
        axios.get('/api/articles.json')
        .then(res => {
            const data = res.data.data
            dispatch(getArticles(data.list))
        })
    }
}

export const action_getRecommends = () => {
    return (dispatch) => {
        axios.get('/api/recommends.json')
        .then(res => {
            const data = res.data.data
            dispatch(getRecommends(data.list))
        })
    }
}

export const action_getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then(res => {
            const data = res.data.data
            dispatch(getHomeData(data))
        })
    }
}

export const action_getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/morearticle.json?page=' + page)
        .then(res => {
            const data = res.data.data
            dispatch(getMoreList(data.list, page+1))
        })
    }
}

export const action_toggleBackScroll = (showScroll) => {
    return {
        type: constants.TOGGLE_BACKSCROLL,
        showScroll
    }
}
