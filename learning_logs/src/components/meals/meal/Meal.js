import React from "react";
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter.js";
/**
 * 
 食物的组件
 */
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt=""></img>                
            </div>
            <div>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <p className={classes.Desc}>{props.meal.desc}</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{props.meal.amount}</span>
                    <div>
                        <Counter 
                            meal={props.meal}
                            onAdd={props.onAdd}
                            onSub={props.onSub}
                        />
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Meal;