import React from 'react';
//@ts-ignore
import styles from "./App.module.css"
import Title from "./Components/Title";
import  Burger from "./Components/Burger"

const App = () => {
  return (
    <div className ={styles.container}>
      <Title title={"Sign In"} /> 
      <Burger status={true} onClick={() => {}}/>
    </div>
  );
}

export default App;
