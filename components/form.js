//register area
// -> manual data fill -> name => id
// -> JSON data

//show areas
// -> id
// -> locality
import styles from "../styles/Form.module.css";
import { useState, useEffect } from "react";

function Register({ onRegister }) {
  const [input, setInput] = useState([{ name: "", value: "" }]);
  const [formData, setFormData] = useState("");

  // let u = {};
  function addInput() {
    setInput(input.push());
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  // useEffect(() => {
  //   console.log(coords);
  // }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.register}>
      <h1>Type coordinates here</h1>
      <div className={styles.holder}>
        <input name="" value={""} placeholder="lat/long 1" />
      </div>
      <hr />
      {/* <input name="name" placeholder="Name" />
      <input  name="email" placeholder="Email" /> */}
      <button>Submit</button>
    </form>
  );
}

function Input({setInput}) {
  const [coords, setCoords] = useState({
    name: "",
    value: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput()
  }

  return <input name={name} onChange={handleChange} />;
}

function Display() {
  return <div>Display</div>;
}

export default Register;
