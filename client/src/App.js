import "./App.css";
import { useState } from "react";

function App() {
  const [data, getData] = useState({
    title: "",
    body: "",
  });

  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;
    getData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8001/test", {
      method: "POST",
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="title" onChange={handleInput} value={data.title} />
        <textarea
          name="body"
          onChange={handleInput}
          value={data.body}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
