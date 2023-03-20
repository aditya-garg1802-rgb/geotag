//register area
// -> manual data fill -> name => id
// -> JSON data

//show areas
// -> id
// -> locality
import styles from "../styles/Form.module.css";
import { useState, useEffect } from "react";

function Register({ onRegister }) {
  const [input, setInput] = useState([
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
  ]);
  const [formData, setFormData] = useState("");

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  function handleChange(e, index) {
    const { name, value } = e.target;
    let data = [...input];
    // console.log(data[name])
    data[index][name] = value;
    setInput(data);
    // console.log(index);
    // console.log(index,event.target.name)
  }

  function addInput() {
    let newInput = { name: "" };
    setInput([...input, newInput]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(input);
    onRegister(input);
  }

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  return (
    <form onSubmit={handleSubmit} className={styles.register}>
      <div className={styles.toprow}>
        <h1>Type coordinates here</h1>
        <button className={styles.add} onClick={addInput}>
          +
        </button>
      </div>
      <div className={styles.holder}>
        {input.map((data, index) => {
          return (
            <input
              key={index}
              name="name"
              placeholder="lat,long"
              value={data.name}
              onChange={(e) => handleChange(e, index)}
            />
          );
        })}
      </div>
      <hr />

      {/* <input name="name" placeholder="Name" />
      <input  name="email" placeholder="Email" /> */}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

function Display() {
  return <div>Display</div>;
}

export default Register;
