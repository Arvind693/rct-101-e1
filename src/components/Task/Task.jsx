import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({e}) => {
  // NOTE: do not delete `data-cy` key value pair
  console.log(e)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
        {e.text}
      </div>
      <Counter/>
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;
