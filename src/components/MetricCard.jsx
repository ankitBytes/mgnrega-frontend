import React from 'react';
import PropTypes from 'prop-types';
import './MetricCard.css';

/**
 * MetricCard Component
 * Displays a metric with title, value, and optional trend indicator
 * Follows WCAG accessibility guidelines
 */
const MetricCard = ({ title, value, unit, trend, ariaLabel }) => {
  return (
    <div 
      className="metric-card" 
      role="region" 
      aria-label={ariaLabel || `${title} metric`}
      tabIndex="0"
    >
      <div className="metric-card__header">
        <h3 className="metric-card__title">{title}</h3>
      </div>
      <div className="metric-card__content">
        <span className="metric-card__value" aria-live="polite">
          {value}
          {unit && <span className="metric-card__unit">{unit}</span>}
        </span>
        {trend && (
          <span 
            className={`metric-card__trend metric-card__trend--${trend > 0 ? 'positive' : 'negative'}`}
            aria-label={`Trend: ${trend > 0 ? 'increasing' : 'decreasing'} by ${Math.abs(trend)} percent`}
          >
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  );
};

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
  trend: PropTypes.number,
  ariaLabel: PropTypes.string,
};

MetricCard.defaultProps = {
  unit: '',
  trend: null,
  ariaLabel: '',
};

export default MetricCard;
