import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({dataText}) => {
  // NOTE: do not delete `data-cy` key value pair
  console.log(dataText)
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {/* {dataText.map(e=><Task e={e}/>)} */}

      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
