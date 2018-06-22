import React from 'react';
import classes from './Layout.css';

const layout =(props)=> {
    return (
       <div className={classes.Content}>
          <main>{props.children}</main>     
         </div>   
    );   
}

export default layout;