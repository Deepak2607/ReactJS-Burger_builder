import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal =(props) =>{
    
    return(
        
     <div>
        <Backdrop isModalOpen={props.isModalOpen} closeModal={props.closeModal}/> 
        
        <div className={classes.Modal}>
        <h6 className={classes.heading}>You ordered burger with the following ingredients:</h6>
        <ul className={classes.list}>
         {props.ingredients.map(ingredient =>
          <li>{ingredient.label}: {ingredient.qty}</li>
         )}
        </ul>
        <p className={classes.heading}>Total Price: {props.totalPrice + ' RS'}</p>
        <p className={classes.list}>Do you want to continue?</p>
        <button className="btn btn-success btn-sm" onClick={props.continuePurchase}> continue </button>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;
        <button className="btn btn-danger btn-sm" onClick={props.closeModal}> Cancel </button>
        
        </div> 

     </div>

     );
    
}

export default modal