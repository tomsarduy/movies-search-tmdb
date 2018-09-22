import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";

const HelloWorld = () => {
  return <div className={styles.title}>Up and running!</div>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
