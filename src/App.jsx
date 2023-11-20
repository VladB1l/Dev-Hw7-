import "./styles.css";
import { useState } from "react";
import ListNote from "./Components/ListNote/ListNote.jsx";
import AddFunction from "./Components/AddFunction/AddFunction.jsx";

function App() {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  
  const detective = {
    display: list.length === 0 ? "flex" : "none",
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <div className="detective" style={detective}>
        <p>Empty ...</p>
      </div>

      <ListNote list={list} setList={setList} count={count} setCount={setCount} />
      <AddFunction
        list={list}
        setList={setList}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
