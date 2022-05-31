import React, { useCallback, useMemo } from "react";
import classes from './Schedule.module.css'
import Title from "../ui_kit/Title/Title"
import Timetable from "../ui_kit/Timetable/Timetable";
import Button from "../ui_kit/Button/Button";
import { useSelector } from 'react-redux'
import { addDays, eachWeekOfInterval, eachMonthOfInterval, format, addMonths, isBefore, isEqual } from 'date-fns'
import ru from 'date-fns/locale/ru'
import constant from '../../constants'


export function Schedule() {
    const title = useSelector(state => state.schedule.title)
    const { resultDate, repeatNumder, todayYear, todayMonth, todayDate, todayID } = useSelector(state => state.quantity)
    const { days, resultDay, resultDayOfMonth, isWeeklySelected, isMonthlySelected } = useSelector(state => state.period)
    const time = useSelector(state => state.time.timetableTime)

    const whatIsDayIdWeekly = useCallback(() => days.find(day => day.value === resultDay).id, [days, resultDay])


    const getStartDayWeekly = useCallback(() => {
        const resultId = whatIsDayIdWeekly()
        let deltaToNewDate
        if (resultId < todayID) {
            deltaToNewDate = constant.maxDaysId - todayID + 1 + resultId
        } else if (resultId > todayID) {
            deltaToNewDate = resultId - todayID
        } else if (resultId === todayID) {
            deltaToNewDate = 0
        }
        return addDays((new Date()).setHours(0, 0, 0, 0), deltaToNewDate)
    }, [whatIsDayIdWeekly,todayID])

    const getStartDayMonthly = useCallback(() => {
        const resultId = resultDayOfMonth
        let startDay
        if (resultId < todayDate) {
            startDay = new Date(todayYear, todayMonth + constant.convertMonthIndx, resultId)
        } else if (resultId > todayDate || resultId === todayDate) {
            startDay = new Date(todayYear, todayMonth, resultId)
        }
        return startDay
    }, [todayDate, resultDayOfMonth, todayMonth, todayYear])

    const getStartDay = useCallback(() => {
        return isWeeklySelected ? getStartDayWeekly() : getStartDayMonthly()
    }, [isWeeklySelected, getStartDayWeekly, getStartDayMonthly])

    const formingArrayOfDate = (array) => {
        let arrayOfDate = array.map((date) => format(new Date(date), "d MMMM yyyy", { locale: ru }))
        return arrayOfDate
    }

    const isMonthArrayExist = useCallback((start, end) => {
        const before = isBefore(start, end)
        const equal = isEqual(start, end)
        return before || equal
    }, [])

    const getDateArray = useCallback(() => {
        const start = getStartDay()

        if (isWeeklySelected) {
            const result = eachWeekOfInterval({
                start: new Date(start),
                end: new Date(resultDate)
            }, { weekStartsOn: whatIsDayIdWeekly() })
            return formingArrayOfDate(result)
        } else if (isMonthlySelected) {
            const result = []
            const arrayOfMonth = eachMonthOfInterval({
                start: new Date(start),
                end: new Date(resultDate)
            })
            arrayOfMonth.forEach((arr, index) => result.push(addMonths(new Date(start), index)))

            const dateArrFull = formingArrayOfDate(result)
            const extraMonthNumber = dateArrFull.length - 1

            return resultDate.getDate() < resultDayOfMonth
                ? dateArrFull.slice(0, extraMonthNumber)
                : formingArrayOfDate(result)
        }
    }, [getStartDay, formingArrayOfDate])

    const getWeekSchedule = useMemo(() => {
        const isExist = isMonthArrayExist(new Date(getStartDay()), new Date(resultDate));

        return isExist ? getDateArray() : [];
    }, [isMonthArrayExist, resultDate, getDateArray, getStartDay])


    const isDateExist = getWeekSchedule.length
    const WeekScheduleWithoutFirstDate = getWeekSchedule.slice(1, repeatNumder)
    const WeekScheduleFirstDate = getWeekSchedule.slice(0, 1)

    return (
        <div className={classes.Schedule}>
            <div className={classes.SchedulePart}>
                <Title title={title} />
            </div>
            <div className={classes.SchedulePart2}>
                {isDateExist ? null : <p>{constant.warningMessage}</p>}
                <Timetable date={WeekScheduleFirstDate} time={time} />
                {WeekScheduleWithoutFirstDate.map((date, index) => <Timetable date={date} key={index} />)}
                {isDateExist >= 6 ? <p>//-//-//-//-//</p> : null}
                <Button />
            </div>
        </div>

    )
}

