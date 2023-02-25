import PropTypes from 'prop-types';
import { List, Item, TextValue } from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>
        <TextValue>Good: {good}</TextValue>
      </Item>
      <Item>
        <TextValue>Neutral: {neutral}</TextValue>
      </Item>
      <Item>
        <TextValue>Bad: {bad}</TextValue>
      </Item>
      <Item>
        <TextValue>Total: {total}</TextValue>
      </Item>
      <Item>
        <TextValue>Positive feedback: {positivePercentage}%</TextValue>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
