import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { getData, updateData, updateappData } from "../actions";
import classes from "./TableData.module.scss";
// import { useDispatch } from "react-redux";

// import { updatedatestatus, getdatestatus } from "../actions";
export default function TableData() {
  const [Box, setBox] = useState(false);
  const data = useSelector((state) => state.data);
  // const date = useSelector((state) => state.date);
  const [date, setDate] = useState(true);
  const [appname, setAppname] = useState(true);
  const [requests, setRequests] = useState(true);
  const [response, setResponse] = useState(true);
  const [impressions, setImpressions] = useState(true);
  const [clicks, setClicks] = useState(true);
  const [revenue, setRevenue] = useState(true);
  const [fillrate, setFillRate] = useState(true);
  const [ctr, setCtr] = useState(true);

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
              <button
                className={`${classes.column} ${
                  date ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setDate(!date);
                }}
              >
                date
              </button>
              <button
                className={`${classes.column} ${
                  appname ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setAppname(!appname);
                }}
              >
                App Id
              </button>
              <button
                className={`${classes.column} ${
                  requests ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setRequests(!requests);
                }}
              >
                requests
              </button>
              <button
                className={`${classes.column} ${
                  response ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setResponse(!response);
                }}
              >
                responses
              </button>
              <button
                className={`${classes.column} ${
                  impressions ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setImpressions(!impressions);
                }}
              >
                impressions
              </button>
              <button
                className={`${classes.column} ${
                  clicks ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setClicks(!clicks);
                }}
              >
                clicks
              </button>
              <button
                className={`${classes.column} ${
                  revenue ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setRevenue(!revenue);
                }}
              >
                revenue
              </button>
              <button
                className={`${classes.column} ${
                  fillrate ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setFillRate(!fillrate);
                }}
              >
                FillRate
              </button>
              <button
                className={`${classes.column} ${
                  ctr ? `${classes.on}` : `${classes.off}`
                }`}
                onClick={() => {
                  setCtr(!ctr);
                }}
              >
                CTR
              </button>
            </div>
            <div className={classes.btns}>
              <button onClick={() => setBox(!Box)}>Close</button>
              <button onClick={() => {}}>Apply Changes</button>
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
              {date ? <th>date</th> : ""}
              {appname ? <th>App Name</th> : ""}
              {requests ? <th>requests</th> : ""}
              {response ? <th>responses</th> : ""}
              {impressions ? <th>impressions</th> : ""}
              {clicks ? <th>clicks</th> : ""}
              {revenue ? <th>revenue</th> : ""}
              {fillrate ? <th>fill rate</th> : ""}
              {ctr ? <th>CTR</th> : ""}

              {/* {columns[0].map((x, i) => {
                return <th key={i}>{x}</th>;
              })} */}
            </tr>
          </thead>
          <tbody>
            {data.map((x, i) => {
              const index = app_ids.indexOf(x.app_id);
              const app_name = appData[index]["app_name"];
              return (
                <tr key={i}>
                  {date ? (
                    <td id={0}>{new Date(x.date).toDateString()}</td>
                  ) : (
                    ""
                  )}
                  {appname ? <td id={1}>{app_name}</td> : ""}
                  {requests ? <td id={2}>{x.requests}</td> : ""}
                  {response ? <td id={3}>{x.responses}</td> : ""}{" "}
                  {impressions ? <td id={4}>{x.impressions}</td> : ""}
                  {clicks ? <td id={5}>{x.clicks}</td> : ""}{" "}
                  {revenue ? <td id={6}>${x.revenue.toFixed(2)}</td> : ""}{" "}
                  {fillrate ? (
                    <td id={7}>
                      {((x.requests / x.responses) * 100).toFixed(2)}%
                    </td>
                  ) : (
                    ""
                  )}
                  {ctr ? (
                    <td id={8}>
                      {((x.clicks / x.impressions) * 100).toFixed(2)}%
                    </td>
                  ) : (
                    ""
                  )}
                  {/* // <td id={0}>{new Date(x.date).toDateString()}</td> */}
                  {/* <td id={2}>{x.requests}</td>
                  <td id={3}>{x.responses}</td>
                  <td id={4}>{x.impressions}</td>
                  <td id={5}>{x.clicks}</td>
                  <td id={6}>${x.revenue.toFixed(2)}</td>
                  <td id={7}>
                    {((x.requests / x.responses) * 100).toFixed(2)}%
                  </td>
                  <td id={8}>
                    {((x.clicks / x.impressions) * 100).toFixed(2)}%
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
