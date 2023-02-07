import React, { useEffect, useState } from 'react';
import { get_pokemon_name } from './utils/utils';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const handleChange = (data) => {
    setId(data.target.value);
  }

  useEffect(() => {
    get_pokemon_name(id)
      .then(data => {
        setName(data);
      })
  }, [id]);

  return (
    <div className="App">
      <h1>VERCEL TEST 1</h1>
      <input type='number' onChange={handleChange} min={1} max={200} />
      <p>{name}</p>
    </div>
  );
}

export default App;
