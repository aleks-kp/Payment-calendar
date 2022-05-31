import {
    DAY_SELECTED, MONTH_SELECTED, RESULT_MONTH, SELECTED_DAY,
    RESULT_TIME,
    LIMITED,
    RESULT_DATE,
    CURRENT_DATE,
    START_DATE,
    REPEAT_NUMBER,
    LIMITED_REPEAT_NUMBER,
    SELECT_LIMITED_REPEAT_NUMBER,
    FINAL_DATE_REQUIRED
} from '../reducers/actionTypes';
import constant from '../../constants'


export function inputSelectWeekly() {
    return {
        type: DAY_SELECTED
    }
}

export function inputSelectMonthly() {
    return {
        type: MONTH_SELECTED
    }
}

export function inputSelectDate() {
    return {
        type: FINAL_DATE_REQUIRED,
        payload: constant.maxRepatNumber,
    }
}

export function isDaySelect() {
    return {
        type: DAY_SELECTED
    }
}

export function isMonthSelect() {
    return {
        type: MONTH_SELECTED
    }
}

export function resultMonth(value) {
    return {
        type: RESULT_MONTH,
        payload: value
    }
}

export function selectedDay(value) {
    return {
        type: SELECTED_DAY,
        payload: value
    }
}

export function getStartDate(value) {
    return {
        type: START_DATE,
        payload: value
    }
}

export function resultTime(value) {
    return {
        type: RESULT_TIME,
        payload: value
    }
}

export function getDate(value) {
    return {
        type: RESULT_DATE,
        payload: value
    }
}

export function getCurrentDate() {
    return {
        type: CURRENT_DATE,
        payload: new Date()
    }
}

export function getRepeatNumber(value) {
    return {
        type: LIMITED_REPEAT_NUMBER,
        payload: { repeatNumber: value,  maxResultDate: constant.maxResultDate}
    }
}

export function getResultDate(date) {
    return {
        type: RESULT_DATE,
        payload: {resultDate: date, repeatNumder: constant.maxRepatNumber}
    }
}

export function inputSelectUnlimited() {
    return {
        type: REPEAT_NUMBER,
        payload: { maxRepeatNumber: constant.maxRepatNumber, maxResultDate: constant.maxResultDate }
    }
}

export function getSelectRepeatNumber(value, repeatInput) {
    return {
        type: SELECT_LIMITED_REPEAT_NUMBER,
        payload: { repeatNumber: repeatInput,  maxResultDate: constant.maxResultDate}
    }
}

export function inputSelectRepeatNumber() {
    return {
        type: LIMITED,
        payload: { maxResultDate: constant.maxResultDate }
    }
}
