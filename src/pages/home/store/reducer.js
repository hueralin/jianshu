import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topics: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GET_TOPICS:
            return state.set('topics', fromJS(action.data))
        default: return state
    }
}
