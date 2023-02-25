import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  width: 100px;
  min-height: 40px;

  font-weight: 500;
  font-size: 20px;

  border-radius: 8px;

  background-color: black;
  color: white;

  text-transform: capitalize;

  :hover,
  :focus {
    color: ${props => {
      switch (props.children) {
        case 'good':
          return 'green';

        case 'neutral':
          return 'yellow';

        case 'bad':
          return 'red';

        default:
          return 'white';
      }
    }};
  }
`;
