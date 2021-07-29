import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Repeticao = () => {
  const [treinos, setTreinos] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      axios.get('http://localhost:1337/treinos').then((response) => {
        setTreinos(response.data);
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <div>
      <h1>Repetições</h1>
      {treinos.map((t) => (
        <div key={t.id}>
          {t.treino.map((h) => (
            <ul key={h.id}>
              {h.repeticaos.map((j) => (
                <li key={j.id}>{j.name}</li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Repeticao;
