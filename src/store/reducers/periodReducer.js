import {DAY_SELECTED, MONTH_SELECTED, RESULT_MONTH, SELECTED_DAY} from './actionTypes'
import locale from '../../localization'

const initialState = {
    timeEveryWeek: locale.period.everyWeek, 
    timeEveryMonth: locale.period.everyMonth,
    title: locale.title.period,
    days: [
        {value: locale.days.monday, id: 1}, 
        {value: locale.days.tuesday, id: 2},
        {value: locale.days.wednesday, id: 3},
        {value: locale.days.thursday, id: 4}, 
        {value: locale.days.friday, id: 5},
        {value: locale.days.saturday, id: 6},
        {value: locale.days.sunday, id: 0},
    ],
    month: [
        {value: "1", id: 1},
        {value: "2", id: 2},
        {value: "3", id: 3},
        {value: "4", id: 4},
        {value: "5", id: 5},
        {value: "6", id: 6},
        {value: "7", id: 7},
        {value: "8", id: 8},
        {value: "9", id: 9},
        {value: "10", id: 10},
        {value: "11", id: 11},
        {value: "12", id: 12},
        {value: "13", id: 13},
        {value: "14", id: 14},
        {value: "15", id: 15},
        {value: "16", id: 16},
        {value: "17", id: 17},
        {value: "18", id: 18},
        {value: "19", id: 19},
        {value: "20", id: 20},
        {value: "21", id: 21},
        {value: "22", id: 22},
        {value: "23", id: 23},
        {value: "24", id: 24},
        {value: "25", id: 25},
        {value: "26", id: 26},
        {value: "27", id: 27},
        {value: "28", id: 28},
        {value: "29", id: 29},
        {value: "30", id: 30},
        {value: "31", id: 31},
    ],
    name: locale.period.name,
    isWeeklySelected: true,
    isMonthlySelected: false,
    resultDay: locale.days.monday,
    resultDayOfMonth: 1
}

export const periodReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAY_SELECTED: 
            return {...state, isWeeklySelected: true, isMonthlySelected: false}
        case MONTH_SELECTED: 
            return {...state, isWeeklySelected: false, isMonthlySelected: true}
        case SELECTED_DAY: 
            return {...state, resultDay: action.payload}
        case RESULT_MONTH: 
            return {...state, resultDayOfMonth: action.payload}
        default:
            return state
    }   
}