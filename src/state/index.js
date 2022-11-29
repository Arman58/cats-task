import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../state/reducers/reducer'

export const store = createStore(reducer,applyMiddleware(thunk))
