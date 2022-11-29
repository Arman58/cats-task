import * as types from './types'
import axios from 'axios'

export const getCategories = () => {
    return (dispatch) => {
        axios.get(`https://api.thecatapi.com/v1/categories`)
            .then(res =>
                dispatch({
                    type: types.GET_CATEGORY_SUCCESS,
                    peyload: res
                }))
            .catch(
                err =>
                    dispatch({
                        type: types.GET_CATEGORY_FAILED,
                        peyload: err.toString()
                    })
            )
    }
}

export const getCats = (limit, category_id) => {
    const getCatsURL = category_id ? `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${category_id}` : `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1`
    return (dispatch) => {
        axios.get(getCatsURL)
            .then(res =>
                dispatch({
                    type: types.GET_CATS_SUCCESS,
                    peyload: res
                }))
            .catch(
                err =>
                    dispatch({
                        type: types.GET_CATS_FAILED,
                        peyload: err.toString()
                    })
            )
    }
}

export const changeCategory = (category) => {
    return (dispatch) => dispatch({
        type: types.SET_CATEGORY,
        peyload: category
    })
}