import React, { useCallback, useState } from "react";
import classes from './Period.module.css'
import Title from "../ui_kit/Title/Title"
import RadioButtonComp from "../ui_kit/RadioButton/RadioButton";
import Select from "../ui_kit/Select/Select";
import Modal from "../ui_kit/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { resultMonth, selectedDay, inputSelectWeekly, inputSelectMonthly } from '../../store/actions/actions';
import locale from '../../localization'


export function Period() {
    const dispatch = useDispatch()

    const [modalOpen, setModalOpen] = useState(false)

    const { timeEveryWeek, timeEveryMonth, title, days, daysId, month, name, isWeeklySelected, isMonthlySelected } = useSelector(state => state.period)

    const handleInputWeekly = useCallback(() => dispatch(inputSelectWeekly()), [dispatch])
    const handleInputMonthly = useCallback(() => dispatch(inputSelectMonthly()), [dispatch])
    const handleSelectDayOfWeek = useCallback((event) => dispatch(selectedDay(event.target.value)), [dispatch])
    const handleSelectDayOfMonth = useCallback((event) => dispatch(resultMonth(event.target.value)), [dispatch])

    return (
        <div className={classes.Period}>
            <div className={classes.PeriodPart}>
                <Title title={title} />
            </div>
            <div className={classes.PeriodPart} id={name}>
                <RadioButtonComp
                    text={timeEveryWeek}
                    id={timeEveryWeek}
                    key={timeEveryWeek}
                    name={name}
                    onChange={handleInputWeekly}
                />
                <RadioButtonComp
                    text={timeEveryMonth}
                    id={timeEveryMonth}
                    key={timeEveryMonth}
                    name={name}
                    onChange={handleInputMonthly}
                />
                <div onClick={() => setModalOpen(true)}>
                    <a href="#">{locale.period.selectDate}</a>
                </div>
            </div>
            <div className={classes.PeriodPart}>
                {isWeeklySelected === true ?
                    <Select
                        options={days}
                        dataId={daysId}
                        onChange={handleSelectDayOfWeek}
                    />
                    :
                    <Select
                        options={days}
                        dataId={daysId}
                        disabled='disabled'
                        onChange={handleSelectDayOfWeek}
                    />
                }
                {isMonthlySelected === true ?
                    <Select
                        options={month}
                        onChange={handleSelectDayOfMonth}
                    />
                    :
                    <Select
                        options={month}
                        disabled='disabled'
                        onChange={handleSelectDayOfMonth}
                    />
                }
            </div>
            <Modal open={modalOpen} setOpen={setModalOpen} />
        </div>
    )
}

