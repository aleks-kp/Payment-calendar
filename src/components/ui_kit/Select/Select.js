import React from "react";
import classes from './Select.module.css'


const Select = (props) => {
  
    return (
        <div className={classes.Select}>
            <select
                value={props.value}
                onChange={props.onChange} 
                data-id={props.id}
                size={1}
                disabled={props.disabled}
            >
                { props.options.map(({value, id}) =>{
                    return (
                        <option
                            value={value}
                            key={id}
                        >
                            {value}
                        </option>
                    )
                }) }
            </select>
        </div>
    )
}

export default Select