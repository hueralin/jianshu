import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

// 没必要导出的函数，要放在顶部

// "换一批"热门搜索
const changeHotSearchList = (data) => {
    return {
        type: constants.CHANGE_HOTSEARCHLIST,
        data: fromJS(data),
        // 每页显示6个标签
        totalPage: Math.ceil(data.length / 6)
    }
}

export const searchFocused = () => {
    return {
        type: constants.SEARCH_FOCUSED
    }
}

export const searchBlur = () => {
    return {
        type: constants.SEARCH_BLUR
    }
}

export const mouseEnter = () => {
    return {
        type: constants.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: constants.MOUSE_LEAVE
    }
}

export const pageSwitch = () => {
    return {
        type: constants.PAGE_SWITCH
    }
}

export const getHotSearchList = () => {
    return (dispatch) => {
        axios.get('/api/hotSearchList.json')
        .then(res => {
            const data = res.data
            dispatch(changeHotSearchList(data.data.list))
        })
        .catch(err => {
            console.log(err)
        })
    }
}
