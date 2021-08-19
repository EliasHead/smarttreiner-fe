import axios from 'axios';
import React, { useState, useEffect } from 'react';

import * as Styled from './styles';

export const Series = () => {
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
    <Styled.Container>
      <div>
        <h1>serie</h1>
        {treinos.map((t) => (
          <div key={t.id}>
            {t.treino.map((h) => (
              <ul key={h.id}>
                {h.series.map((j) => (
                  <li key={j.id}>{j.title}</li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </Styled.Container>
  );
};
