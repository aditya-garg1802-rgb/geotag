
import styles from "../styles/Form.module.css";
import { useState, useEffect } from "react";

function Register({ onRegister }) {
  const [input, setInput] = useState([
    [],[],[],[]
  ]);
  const [formData, setFormData] = useState("");


  function handleChange(e, index) {
    const { name, value } = e.target;
    let data = [...input];
    // console.log(data[name])
    let arr = value.split(',')
    let nums = arr.map(Number)

    data[index] = nums;
    setInput(data);

  }

  function addInput() {
    let newInput = [];
    setInput([...input, newInput]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(input);
  }

  

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
              placeholder="long,lat"
              value={data.name}
              onChange={(e) => handleChange(e, index)}
            />
          );
        })}
      </div>
      <hr />


      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

function Display() {
  return <div>Display</div>;
}

export default Register;
