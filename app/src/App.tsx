import React from 'react';
import Axios from 'axios';

function App() {

  let client = Axios.create({ withCredentials: true });
  
  const login = () => {
    console.log('login!!');
    client.get('http://localhost:8000/api');
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
