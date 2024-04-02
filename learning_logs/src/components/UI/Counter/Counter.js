import React from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

/*
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest


*/

const Counter = (props) => {

    //添加购物车的函数
    const addButtonHandler = () => {
        props.onAdd(props.meal);
    };

    //减少购物车的函数
    const subButtonHandler = () => {
        props.onSub(props.meal);
    };

    return(
        <div className={classes.Counter}>
             {
            (props.meal.amount && props.meal.amount !== 0) ? (
                <>
                <button className={classes.Sub} onClick={subButtonHandler}>
                <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className={classes.Count}>{props.meal.amount}</span>
                </>
            ): null
            }
          
            <button className={classes.Add} onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
export default Counter;