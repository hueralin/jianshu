import * as constants from './constants'
import axios from 'axios'

const getTopics = (data) => {
    return {
        type: constants.GET_TOPICS,
        data
    }
}

export const action_getTopics = () => {
    return (dispatch) => {
        axios.get('/api/topics.json')
        .then(res => {
            const data = res.data
            dispatch(getTopics(data.data.list))
        })
    }
}
