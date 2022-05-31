import {
    LIMITED, RESULT_DATE, CURRENT_DATE,
    START_DATE, REPEAT_NUMBER, LIMITED_REPEAT_NUMBER, SELECT_LIMITED_REPEAT_NUMBER,
    FINAL_DATE_REQUIRED
} from './actionTypes'
import locale from '../../localization'

const initialState = {
    todayYear: new Date().getFullYear(),
    todayMonth: new Date().getMonth(),
    todayDate: new Date().getDate(),
    todayID: new Date().getDay(),
    title: locale.title.quantity,
    numbers: [locale.repeatNumber.unlimited],
    name: locale.title.quantity,
    unlimited: false,
    limited: false,
    isFinalDate: false,
    repeatNumder: '',
    resultDate: '',
    currentDate: '',
    timetable: [],
    startDate: '',
}


export const quantityReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIMITED:
            return {
                ...state,
                unlimited: false,
                limited: true,
                isFinalDate: false,
                resultDate: action.payload.maxResultDate
            }
        case RESULT_DATE:
            return {
                ...state,
                unlimited: false,
                limited: false,
                isFinalDate: true,
                resultDate: action.payload.resultDate,
                repeatNumder: action.payload.repeatNumder
            }
        case CURRENT_DATE:
            return { ...state, currentDate: action.payload }
        case START_DATE:
            return { ...state, startDate: action.payload }
        case REPEAT_NUMBER:
            return {
                ...state,
                repeatNumder: action.payload.maxRepeatNumber,
                resultDate: action.payload.maxResultDate,
                unlimited: true,
                limited: false,
                isFinalDate: false
            }
        case LIMITED_REPEAT_NUMBER:
            return {
                ...state,
                repeatNumder: action.payload.repeatNumber,
                resultDate: action.payload.maxResultDate,
            }
        case SELECT_LIMITED_REPEAT_NUMBER:
            return {
                ...state,
                repeatNumder: action.payload.repeatNumber,
                resultDate: action.payload.maxResultDate,
                unlimited: false,
                limited: true,
            }
        case FINAL_DATE_REQUIRED:
            return {
                ...state,
                isFinalDate: true,
                limited: false,
                unlimited: false,
            }
        default:
            return state
    }
}