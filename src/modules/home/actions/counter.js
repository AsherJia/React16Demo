import { INCREMENT, REDUCTION, SET_PAGE_DATA } from '../constants/actionTypes'

export const increment = () => {
    return { type: INCREMENT }
}

export const reduction = () => {
    return { type: REDUCTION }
}

export const autoIncrement = () => (dispatch, getState) => {
    const { pageData } = getState()
    const { autoIncrementCount } = pageData

    if (autoIncrementCount) {
        clearTimeout(autoIncrementCount)
        dispatch({
            type: SET_PAGE_DATA,
            payload: { autoIncrementCount: null }
        })
    } else {
        const currentAutoIncrementNumber = setInterval(() => {
            dispatch({ type: INCREMENT })
        }, 1000)

        dispatch({
            type: SET_PAGE_DATA,
            payload: { autoIncrementCount: currentAutoIncrementNumber }
        })
    }
}