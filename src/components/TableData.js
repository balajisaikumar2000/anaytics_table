import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { getData, updateData, updateappData } from "../actions";
import classes from "./TableData.module.scss";
// import { useDispatch } from "react-redux";

// import { updatedatestatus, getdatestatus } from "../actions";
export default function TableData() {
  const [query, setQuery] = useState("");
  const [strQuery, setStrQuery] = useState("");
  const [reqQuery, setReqQuery] = useState("");
  const [resQuery, setResQuery] = useState("");
  const [impQuery, setImpQuery] = useState("");
  const [clicksQuery, setClicksQuery] = useState("");
  const [fillrateQuery, setFillRateQuery] = useState("");
  const [ctrQuery, setCtrQuery] = useState("");

  const [Box, setBox] = useState(false);
  const data = useSelector((state) => state.data);

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
  const resetHandler = () => {
    return (
      setQuery(""),
      setStrQuery(""),
      setReqQuery(""),
      setResQuery(""),
      setImpQuery(""),
      setClicksQuery(""),
      setFillRateQuery(""),
      setCtrQuery("")
    );
  };

  return (
    <div className={classes.tableData}>
      <div className={classes.settings}>
        <button onClick={() => setBox(!Box)}>Settings</button>
        {Box ? (
          <div className={classes.box}>
            <h4>click on the buttons to select and deselect the column view</h4>
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
              {/* <button onClick={() => {}}>Apply Changes</button> */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <button className={classes.resetButton} onClick={resetHandler}>
        Reset Filters
      </button>

      <div className={classes.table}>
        <table id={"myTable"}>
          <thead>
            <tr>
              {date ? <th>date</th> : ""}
              {appname ? (
                <th>
                  <div className={classes.whole1}>
                    <p className={classes.para}>
                      <p>App Name</p>
                      <img
                        src="https://img.icons8.com/ios/50/000000/filter--v1.png"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      id={"myInput2"}
                      size={16}
                      className={classes.stringQuery}
                      onChange={(e) => {
                        setStrQuery(e.target.value);
                      }}
                      placeholder={"enter a string"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}
              {requests ? (
                <th>
                  <div className={classes.whole2}>
                    <p className={classes.para}>
                      <p>Requests</p>
                      <img
                        src="filter.svg"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      size={10}
                      className={classes.requestQuery}
                      onChange={(e) => {
                        setReqQuery(e.target.value);
                      }}
                      placeholder={"enter a number"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}
              {response ? (
                <th>
                  <div className={classes.whole3}>
                    <p className={classes.para}>
                      <p>Responses</p>
                      <img
                        src="filter.svg"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      size={10}
                      className={classes.responseQuery}
                      onChange={(e) => {
                        setResQuery(e.target.value);
                      }}
                      placeholder={"enter a number"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}
              {impressions ? (
                <th>
                  <div className={classes.whole4}>
                    <p className={classes.para}>
                      <p>Impressions</p>
                      <img
                        src="filter.svg"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      size={10}
                      className={classes.impressionsQuery}
                      onChange={(e) => {
                        setImpQuery(e.target.value);
                      }}
                      placeholder={"enter a number"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}
              {clicks ? (
                <th>
                  <div className={classes.whole5}>
                    <p className={classes.para}>
                      <p>Clicks</p>
                      <img
                        src="filter.svg"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      size={10}
                      className={classes.clicksQuery}
                      onChange={(e) => {
                        setClicksQuery(e.target.value);
                      }}
                      placeholder={"enter a number"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}
              {revenue ? (
                <th>
                  <div className={classes.whole6}>
                    <p className={classes.para}>
                      <p>Revenue</p>
                      <img
                        src="filter.svg"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      size={10}
                      className={classes.revenueQuery}
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      placeholder={"enter a number"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}
              {fillrate ? (
                <th>
                  <div className={classes.whole7}>
                    <p className={classes.para}>
                      <p>Fill Rate</p>
                      <img
                        src="filter.svg"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      size={10}
                      className={classes.fillrateQuery}
                      onChange={(e) => {
                        setFillRateQuery(e.target.value);
                      }}
                      placeholder={"enter a number"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}
              {ctr ? (
                <th>
                  <div className={classes.whole8}>
                    <p className={classes.para}>
                      <p>CTR</p>
                      <img
                        src="filter.svg"
                        alt="filter icon"
                        className={classes.filterImg}
                      />
                    </p>
                    <input
                      type={"text"}
                      size={10}
                      className={classes.ctrrQuery}
                      onChange={(e) => {
                        setCtrQuery(e.target.value);
                      }}
                      placeholder={"enter a number"}
                    />
                  </div>
                </th>
              ) : (
                ""
              )}

              {/* {columns[0].map((x, i) => {
                return <th key={i}>{x}</th>;
              })} */}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((y) => {
                const index = app_ids.indexOf(y.app_id);
                const app_name = appData[index]["app_name"];
                return (
                  app_name.toLowerCase().includes(strQuery) &&
                  y.revenue.toFixed(2) > Number(query) &&
                  y.requests > Number(reqQuery) &&
                  y.responses > Number(resQuery) &&
                  y.impressions > Number(impQuery) &&
                  y.clicks > Number(clicksQuery) &&
                  ((y.requests / y.responses) * 100).toFixed(2) >
                    Number(fillrateQuery) &&
                  ((y.clicks / y.impressions) * 100).toFixed(2) >
                    Number(ctrQuery)
                );
                // y.revenue.toFixed(2) > Number(query);
              })
              .map((x, i) => {
                const index = app_ids.indexOf(x.app_id);
                const app_name = appData[index]["app_name"];
                return (
                  <tr key={i}>
                    {date ? (
                      <td id={0} className={classes.datee}>
                        {new Date(x.date).toDateString().slice(4)}
                      </td>
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
