import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { getData, updateData, updateappData } from "../actions";
import classes from "./TableData.module.scss";
export default function TableData() {
  const [Box, setBox] = useState(false);
  const data = useSelector((state) => state.data);
  // const dispatch = useDispatch();
  console.log("data:", data[0]);
  const appData = useSelector((state) => state.appData);
  console.log("appdata:", appData);
  const app_ids = [];
  const columns = [];
  columns.push(Object.keys(data[0]));
  console.log("columns", columns[0]);
  columns[0].push("Fillrate", "CTR");

  appData.forEach((x, i) => {
    app_ids.push(Object.values(x)[0]);
  });
  console.log(app_ids);

  return (
    <div className={classes.tableData}>
      <div className={classes.settings}>
        <button onClick={() => setBox(!Box)}>Settings</button>
        {Box ? (
          <div className={classes.box}>
            <div className={classes.clmns}>
              {columns[0].map((x, i) => {
                return (
                  <p className={classes.column} key={i}>
                    {x}
                  </p>
                );
              })}
            </div>
            <div className={classes.btns}>
              <button onClick={() => setBox(!Box)}>Close</button>
              <button>Apply Changes</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
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
          <tbody>
            {data.map((x, i) => {
              const index = app_ids.indexOf(x.app_id);
              const app_name = appData[index]["app_name"];

              return (
                <tr key={i}>
                  <td>{new Date(x.date).toDateString()}</td>
                  <td>{app_name}</td>
                  <td>{x.requests}</td>
                  <td>{x.responses}</td>
                  <td>{x.impressions}</td>
                  <td>{x.clicks}</td>
                  <td>${x.revenue.toFixed(2)}</td>
                  <td>{((x.requests / x.responses) * 100).toFixed(2)}%</td>
                  <td>{((x.clicks / x.impressions) * 100).toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
