import axios from "axios";
import React, { useState, useEffect } from "react";

const Serie = () => {
  const [treinos, setTreinos] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      axios.get("http://localhost:1337/treinos")
        .then((response) => {
          setTreinos(response.data);
        });
    } catch (error) {
      console.error(error.message);
    }
  }, [])

  return (
    <div>
      <h1>serie</h1>
      {
        treinos.map((t) => (
          <div>
            {t.treino.map((h) => (
              <ul>
                {h.series.map((j) =>
                  <li>
                    {j.title}
                  </li>
                )}
              </ul>
            ))}
          </div>
        ))
      }
    </div>
  )
};

export default Serie;



