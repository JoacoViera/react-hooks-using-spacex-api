import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { error, loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log("loading", loading);
  console.log("here", data);

  return (
    <div className="App">
      <h1>Hello Word</h1>
    </div>
  );
}

export default App;
