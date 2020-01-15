import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topics: [],
    articles: [],
    recommends: [],
    articlePage: 1
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GET_HOME_DATA:
            return state.merge({
                topics: fromJS(action.topics),
                articles: fromJS(action.articles),
                recommends: fromJS(action.recommends)
            })
        case constants.GET_TOPICS:
            return state.set('topics', fromJS(action.data))
        case constants.GET_ARTICLES:
            return state.set('articles', fromJS(action.data))
        case constants.GET_RECOMMENDS:
            return state.set('recommends', fromJS(action.data))
        case constants.GET_MORE_LIST:
            return state.merge({
                articles: state.get('articles').concat(action.articles),
                articlePage: action.articlePage
            })
        default: return state
    }
}
