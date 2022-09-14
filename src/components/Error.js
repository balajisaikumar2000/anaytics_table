import React from "react";
import classes from "./Error.module.scss";

function Error() {
  return (
    <div className={classes.error}>
      <div className={classes.main}>
        <img src="error.svg" alt="svg file" />
        <h4>
          Try to run again or choose date Between 01-06-2021 to 30-06-2021
        </h4>
      </div>
    </div>
  );
}
export default Error;
