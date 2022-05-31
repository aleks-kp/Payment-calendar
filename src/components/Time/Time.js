import React, { useCallback } from "react";
import classes from './Time.module.css'
import Title from "../ui_kit/Title/Title"
import { useSelector, useDispatch } from 'react-redux'
import { resultTime } from '../../store/actions/actions'
import InputMask from 'react-input-mask'
import constant from "../../constants";

export function Time() {
    const { title, label } = useSelector(state => state.time)
    const dispatch = useDispatch()

    const handleResultTime = useCallback((event) => (dispatch(resultTime(event.target.value))), [dispatch])

    return (
        <div className={classes.Time}>
            <div className={classes.TimePart}>
                <Title title={title} />
            </div>
            <div className={classes.TimePart2}>
                <InputMask
                    className={classes.time}
                    id="time"
                    type="text"
                    mask={constant.inputMaskTime}
                    placeholder={constant.inputPlaceHolderTime}
                    onChange={handleResultTime}
                >
                </InputMask >
                <label htmlFor="time">{label}</label>
            </div>
        </div>
    )
}
