import React, { useState, useEffect } from "react";
import classes from "./DateInput.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { getData, updateData } from "../actions";
function DateInput() {
  const [startDate, setStartDate] = useState(new Date("2021-06-01"));
  const [endDate, setEndDate] = useState(new Date("2021-06-30"));
  const dispatch = useDispatch();

  const startHandler = (newDate) => {
    setStartDate(new Date(newDate));
  };
  const endHandler = (newDate) => {
    setEndDate(new Date(newDate));
  };
  useEffect(() => {
    // const url =
    //   "http://go-dev.greedygame.com/v3/dummy/report?startDate=YYYYMM-DD&endDate=YYYY-MM-DD";
    const sy = startDate.getUTCFullYear();
    const sm = String(startDate.getUTCMonth()).padStart(2, 0);
    const sd = String(startDate.getUTCDate()).padStart(2, 0);

    const ey = endDate.getUTCFullYear();
    const em = String(endDate.getUTCMonth()).padStart(2, 0);
    const ed = String(endDate.getUTCDate()).padStart(2, 0);

    console.log("startDate:", startDate);
    console.log("startNumbers: ", sy, sm, sd);

    console.log("endDate:", endDate);
    console.log("endNumbers: ", ey, em, ed);

    const y = `http://go-dev.greedygame.com/v3/dummy/report?startDate=${sy}-${sm}-${sd}&endDate=${ey}-${em}-${ed}`;
    fetch(y)
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp.data);
        dispatch(updateData(resp.data));
      });
  }, [startDate, endDate]);

  return (
    <div className={classes.DatePicker}>
      <h1>DatePicker</h1>
      <span>
        <span>StartDate:</span>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={startHandler}
        />
      </span>
      <span>
        <span>EndDate:</span>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          onChange={endHandler}
        />
      </span>
    </div>
  );
}

export default DateInput;
