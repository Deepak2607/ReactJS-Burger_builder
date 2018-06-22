import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger =(props) =>{
    
    let updatedIngredients=[];
    let ifEmpty='Add ingredients';
    
     props.ingredients.map(ingredient => {
        for(let i=1; i<=ingredient.qty ; i++)
            {
                updatedIngredients.push(
                <BurgerIngredient type= {ingredient.name} />
                )
            }})
    
    return( 
       <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {updatedIngredients.length ? updatedIngredients : ifEmpty}
        <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;