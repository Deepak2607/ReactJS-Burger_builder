import React from 'react';
import classes from './BuildControl.css';

const buildControl =(props)=> {
 
    return (
        <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button disabled={props.disable} className="btn btn-secondary" onClick={props.removeItems}>Less</button>
        <button className='btn btn-primary' onClick={props.addItems}>More</button>   
        </div>
       )
}

export default buildControl;