import React from "react";
import styles from "./fooditem.module.css";

const FoodItem = ({ food }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={food.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
};

export default FoodItem;
