import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseEnter: false,
    page: 1,
    totalPage: 1,
    pageSize: 5,
    hotSearchList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUSED:
            return state.set('focused', true).set('mouseEnter', true)
        case constants.SEARCH_BLUR:
            return state.set('focused', false)
        case constants.CHANGE_HOTSEARCHLIST:
            // return state.set('hotSearchList', action.data).set('totalPage', action.totalPage)
            return state.merge({
                hotSearchList: action.data,
                totalPage: action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseEnter', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseEnter', false)
        case constants.PAGE_SWITCH:
            // 为什么 || 1？因为page=4时，计算结果为0，我们要重新置为1（第一页）
            return state.set('page', (state.get('page')+1)%state.get('pageSize') || 1)
        default: return state
    }
}
