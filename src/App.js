import DateInput from "./components/DateInput";
import TableData from "./components/TableData";
import Error from "./components/Error";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.data);
  const appData = useSelector((state) => state.appData);

  return (
    <div className="App">
      <DateInput></DateInput>
      {data.length > 0 && appData.length > 0 ? <TableData /> : <Error />}
    </div>
  );
}

export default App;
