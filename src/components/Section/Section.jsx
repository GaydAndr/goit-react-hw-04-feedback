import { PropTypes } from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      <>{children}</>
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
