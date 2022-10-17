import React from 'react';
//@ts-ignore
import styles from "./App.module.css"
import Title from "./Components/Title";

const App = () => {
  return (
    <div className ={styles.container}>
      <Title title={"Sign In"} /> 
    </div>
  );
}

export default App;
