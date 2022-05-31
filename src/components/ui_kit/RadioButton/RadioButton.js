import React  from "react"
import classes from './RadioButton.module.css'
import locale from '../../../localization'

const RadioButtonComp = props => {
    const divClasses = [classes.RadioButton]

    if(props.name === locale.title.quantity) {
        divClasses.push(classes.RadioButtonQnt)
    }

    return (
        <div className={divClasses.join(' ')}>
            { props.text === locale.period.everyMonth || props.text === locale.period.everyWeek
                ? <input type='radio' {...props} />
                : <input type='radio' {...props} />
            } 
            <label htmlFor={props.text}>{props.text}</label>
        </div>     
    )
}

export default RadioButtonComp

