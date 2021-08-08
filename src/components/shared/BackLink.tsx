import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = () => {
  const history = useHistory();

  return <BackA onClick={() => history.goBack()}>Back</BackA>;
};

const BackA = styled.a`
  cursor: pointer;
`;
