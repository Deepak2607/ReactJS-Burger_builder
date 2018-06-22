import React from 'react';
import classes from './Backdrop.css';

const backdrop= (props)=> {

    return(
        <div>
        {props.isModalOpen ? <div className={classes.Backdrop} onClick={props.closeModal}></div> : null
        }
        </div>
    );
}

export default backdrop;