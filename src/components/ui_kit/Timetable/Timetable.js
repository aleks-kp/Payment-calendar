import React  from "react"
import classes from './Timetable.module.css'

const Timetable = props => {

    return (    
        <h1 className={classes.h1}>{props.date} {props.time}</h1>      
    )
}

export default Timetable