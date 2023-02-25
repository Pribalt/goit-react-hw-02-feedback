import styled from 'styled-components';

export const List = styled.ul`
  text-align: center;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TextValue = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
