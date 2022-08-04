import { PropTypes } from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) => {
  return (
    <ul className={s.stat__container}>
      <li className="stat__item">
        <span className="stat__name">Good: </span>
        <span className="stat__sum">{good}</span>
      </li>
      <li className="statItem">
        <span className="stat__name">Neutral: </span>
        <span className="stat__sum">{neutral}</span>
      </li>
      <li className="statItem">
        <span className="stat__name">Bad: </span>
        <span className="stat__sum">{bad}</span>
      </li>
      <li>
        <span>Total: </span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive Feedback: </span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
