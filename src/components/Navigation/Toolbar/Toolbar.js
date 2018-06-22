import React from 'react';
import classes from './Toolbar.css';
import burgerLogo1 from '../../../assets/images/imagess.jpg';
import burgerLogo2 from '../../../assets/images/fmpbzv6okkuc29lo0qpd.png';
const toolbar= (props)=> {

    return(
        <header className={classes.Toolbar}>
        <div>
        <img src={burgerLogo1}/>
        </div> 
        <div>
        <img src={burgerLogo2}/>
        </div> 
        </header>
    );
}

export default toolbar;