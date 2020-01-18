import * as constants from './constants'
import axios from 'axios'

const getDetail = (title, content) => ({
    type: constants.GET_DETAIL,
    title,
    content
})

export const action_getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id)
        .then(res => {
            const detail = res.data.data
            dispatch(getDetail(detail.title, detail.content))
        })
    }
}
