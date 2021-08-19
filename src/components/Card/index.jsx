import * as Styled from './styles';
import { Exercicios } from '../Exercicios';
import { Series } from '../Series';
import { Repeticao } from '../Repetcao';

const Card = () => {
  return (
    <Styled.CardWrapper>
      <Styled.CardBody>
        <Exercicios />
        <Series />
        <Repeticao />
      </Styled.CardBody>
    </Styled.CardWrapper>
  );
};

export default Card;
