import * as constants from './constants'

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
