import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <ul>
      {keys.map(key => (
        <li key={key}>
          <button type="button" onClick={onLeaveFeedback}>
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
