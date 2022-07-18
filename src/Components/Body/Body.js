import styled from 'styled-components';
import Request from '../../request';

const Title = styled.h1`
  color: pink;
  font-size: 1rem;
`;

const BodyElement = styled.body`
  background-color: green;
`;

const Body = () => {
  return (
    <BodyElement>
      <Title>
        <h1>The Picture App</h1>
      </Title>
      <Request />
    </BodyElement>
  );
};

export default Body;
