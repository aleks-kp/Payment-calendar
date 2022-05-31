import { combineReducers } from "redux";
import { periodReducer } from './periodReducer'
import { timeReducer } from './timeReducer'
import { quantityReducer } from './quantityReducer'
import { scheduleReducer } from './scheduleReducer'

export const rootReducer = combineReducers({
    period: periodReducer,
    time: timeReducer,
    quantity: quantityReducer,
    schedule: scheduleReducer
})