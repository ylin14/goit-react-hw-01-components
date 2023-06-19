import PropTypes from 'prop-types';

import style from './statistics.module.css';

function Statistic({ stats, title }) {
  const elements = stats.map(i => (
    <li key={i.id} className={style.item}>
      <span className={style.label}>{i.label}</span>
      <span className={style.percentage}>{style.percentage}%</span>
    </li>
  ));
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.stats}>{elements}</ul>
    </section>
  );
}

Statistic.defaultProps = {
  stats: [],
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default Statistic;