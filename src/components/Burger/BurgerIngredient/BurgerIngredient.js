import React, { Component } from 'react';
import classes from './BurgerIngredient.css';


class BurgerIngredient extends Component {
  render() {    
    let ingredient =null;
    
    switch (this.props.type) {
            case('bread-bottom'):  
               ingredient =<div className={classes.BreadBottom}>&emsp;</div>;
               break;
            
            case('bread-top'):  
               ingredient =(<div className={classes.BreadTop}>&emsp;
                            <div className={classes.Seeds1}>&emsp;</div>
                            <div className={classes.Seeds2}>&emsp;</div>
                            
                            </div> 
                           );
               break;
            
            case('meat'):  
               ingredient =<div className={classes.Meat}>&emsp;</div>;
               break;
            
            case('cheese'):  
               ingredient =<div className={classes.Cheese}>&emsp;</div>;
               break;
            
            case('bacon'):  
               ingredient =<div className={classes.Bacon}>&emsp;</div>;
               break;
            
            case('salad'):  
               ingredient =<div className={classes.Salad}>&emsp;</div>;
               break;
            
            default:
               ingredient =null;         
    }   
    return ingredient;
  }    
}
            
export default BurgerIngredient;           
            