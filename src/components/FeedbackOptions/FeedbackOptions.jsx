import { PropTypes } from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.fb__list}>
      {options.map(element => {
        return (
          <li key={element}>
            <button
              type="button"
              name={element}
              className="btn"
              onClick={onLeaveFeedback}
            >
              {element}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
