import React from 'react';
import Axios from 'axios';

function App() {
  const test = async () => {
    Axios.get('http://localhost:8000/api')
      .then(res => {
        console.log(res);
      });
  }

  const login = async () => {
    const formData = {
      email: 'test1@test.jp',
      password: 'testtest',
    }
    Axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      // ログイン…
      Axios
        .post('http://localhost:8000/api/login', formData)
        .then(res => (console.log(res.data)));
    });
  }

  const get = () => {
    console.log('get!!!!!!');
    Axios.get('http://localhost:8000/api/user').then(response => {
      console.log(response);
    });
  }
  
  return (
    <div className="App">
      <button onClick={() => test()}>test</button>
      <button onClick={() => login()}>login</button>
      <button onClick={() => get()}>get</button>
    </div>
  );
}

export default App;
