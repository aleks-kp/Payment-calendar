import {RESULT_TIME} from './actionTypes'
import locale from '../../localization'

const initialState = {
    timetableTime: [],
    title: locale.title.time,
    label: locale.time.timezone
}

export const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESULT_TIME: 
        return {...state, timetableTime: `в ${action.payload}`}
        default:
            return state
    }   
}