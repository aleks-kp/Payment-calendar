import React  from "react"
import classes from './Modal.module.css'


const Modal = ({ open, setOpen }) => {
    const divClasses = [classes.Modal]

    if(open) {
        divClasses.push(classes.active)
    }

    return (
        <div className={divClasses.join(' ')}>
            <div className={classes.closeButton} onClick={() => setOpen(false)}>X</div>
            <h2>Календарь</h2>
        </div>
    )
}

export default Modal