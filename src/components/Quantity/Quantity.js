import React, { useRef, useCallback } from "react";
import InputMask from 'react-input-mask'
import classes from './Quantity.module.css'
import { useSelector, useDispatch } from "react-redux";
import Title from "../ui_kit/Title/Title"
import RadioButtonComp from "../ui_kit/RadioButton/RadioButton";
import { getRepeatNumber, inputSelectDate, getResultDate, getSelectRepeatNumber, inputSelectUnlimited, inputSelectRepeatNumber } from '../../store/actions/actions'
import constant from '../../constants'


export function Quantity() {

    const inputStyle = {
        'float': 'left',
        'width': '15px',
        'margin': '0',
    }

    const { title, numbers, name, limited, isFinalDate } = useSelector(state => state.quantity)
    const dispatch = useDispatch()

    const dateInput = useRef();
    const quantityInput = useRef();  

    const handleSelectUnlimited = useCallback((event) => dispatch(inputSelectUnlimited(event.target)), [dispatch])

    const isInputEmpty = (value) => value === undefined

    const handleRepeatNumber = (value) => {
        if (!isInputEmpty(value) && limited === true) {
            let repeatNum = value
            if (repeatNum > 6) {repeatNum = 6 }
            dispatch(getRepeatNumber(repeatNum))
        }
    }

    const returnDate = (value) => {
        return new Date(
            Number(value.slice(6)), Number(value.slice(3, 5)-1), Number(value.slice(0, 2)), 0, 0, 0)
    }

    const handleResultDate = (value) => {
        if (isFinalDate === true) {
            dispatch(getResultDate(returnDate(value)))
        }
    }

    const handleDateSelect = () => {
        if (dateInput.current.value !== undefined) {
            dispatch(getResultDate(returnDate(dateInput.current.value)))
        } else {
            dispatch(inputSelectDate())
        }
    }

    const handleQuantitySelect = (value) => {
        let repeatInput = Number(quantityInput.current.value)
        if (Number.isInteger(repeatInput) && value.checked) {
            if (repeatInput > 6) {repeatInput = 6 }
            dispatch(getSelectRepeatNumber(value, repeatInput))
        } else {
            dispatch(inputSelectRepeatNumber())
        }
    }

    return (
        <div className={classes.Quantity}>
            <div className={classes.QuantityPart}>
                <Title title={title} />
            </div>
            <div className={classes.QuantityPartRadioBtn} id={name}>
                <RadioButtonComp
                        text={numbers}
                        key={numbers}
                        name={name}
                        numbers={numbers}
                        onChange={handleSelectUnlimited}
                    />
                <input
                    type='radio'
                    id='раз'
                    name={name}
                    onChange={(event) => handleQuantitySelect(event.target, event.id)}
                />
                <input
                    style={inputStyle}
                    ref={quantityInput}
                    onChange={(event) => handleRepeatNumber(event.target.value)}
                ></input>
                <label htmlFor='раз'>раз</label>
            </div>
            <div className={classes.QuantityPart}>
                <input
                    type='radio'
                    name={name}
                    id='date'
                    onChange={() => handleDateSelect()}
                />
                <InputMask
                    className={classes.time}
                    id="time"
                    mask={constant.inputMask}
                    placeholder={constant.inputPlaceHolder}
                    ref={dateInput}
                    onChange={(event) => handleResultDate(event.target.value)}
                >
                </InputMask>
                <label htmlFor="time" ></label>
            </div>
        </div>
    )
}

