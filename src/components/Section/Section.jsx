import PropTypes from 'prop-types';
import { Wrap, Title } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      {children}
    </Wrap>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
