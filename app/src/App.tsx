import React from 'react';
import { getTest } from "./libs/test";

function App() {

  const login = async () => {
    try {
      const res = await getTest()

      if (res?.status === 200) {
        console.log(res);
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const get = () => {
    console.log('get!!!!!!');
  }
  return (
    <div className="App">
      <button onClick={() => login()}>login</button>
      <button onClick={() => get()}>get</button>
    </div>
  );
}

export default App;
