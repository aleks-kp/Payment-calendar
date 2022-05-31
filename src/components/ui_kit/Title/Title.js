import React  from "react"
import classes from './Title.module.css'

const TitleComp = props => <h1 className={classes.h1}>{props.title}</h1>

export default TitleComp