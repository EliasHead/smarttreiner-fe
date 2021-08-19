import Exercicios from '../../components/Exercicios';
import Repeticao from '../../components/Repetcao';
import Serie from '../../components/Series';

function Home() {
  return (
    <div className="App">
      <Exercicios />
      <Serie />
      <Repeticao />
    </div>
  );
}

export default Home;
