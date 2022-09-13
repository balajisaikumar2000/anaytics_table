import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, updateData } from "../actions";
import classes from "./TableData.module.scss";
export default function TableData() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log("data:", data[0]);

  return (
    <div className={classes.tabelData}>
      <h3>Table</h3>
      <div className={classes.table}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>App Name</th>
              <th>Request</th>
              <th>Response</th>
              <th>Impression</th>
              <th>Clicks</th>
              <th>Revenue</th>
              <th>Fill Rate</th>
              <th>CTR</th>
            </tr>
          </thead>
          {data.map((x) => {
            return (
              <tr>
                <td>{new Date(x.date).toDateString()}</td>
                <td>{x.app_id}</td>
                <td>{x.requests}</td>
                <td>{x.responses}</td>
                <td>{x.impressions}</td>
                <td>{x.clicks}</td>
                <td>{x.revenue.toFixed(2)}</td>
                <td>{((x.requests / x.responses) * 100).toFixed(2)}%</td>
                <td>{((x.clicks / x.impressions) * 100).toFixed(2)}%</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
