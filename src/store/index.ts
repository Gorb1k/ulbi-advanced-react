import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from '../store/reducers/index'

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch