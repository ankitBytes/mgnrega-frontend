import React, { useState, useEffect } from 'react';
import MetricCard from '../components/MetricCard';
import { getDashboardMetrics } from '../api';
import './Dashboard.css';

/**
 * Dashboard Page Component
 * Displays MGNREGA metrics and data with accessibility features
 */
const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalWorkers: { value: 0, trend: 0 },
    activeJobs: { value: 0, trend: 0 },
    completedWorks: { value: 0, trend: 0 },
    totalWages: { value: 0, trend: 0 },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const data = await getDashboardMetrics();
        setMetrics(data);
      } catch (err) {
        setError('Failed to load dashboard metrics. Please try again later.');
        console.error('Dashboard metrics error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading" role="status" aria-live="polite">
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error" role="alert" aria-live="assertive">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container" role="main">
      <header className="dashboard-header">
        <h1 tabIndex="0">MGNREGA Dashboard</h1>
        <p tabIndex="0">Real-time employment and wage data</p>
      </header>
      
      <section className="dashboard-metrics" aria-label="Key metrics">
        <MetricCard
          title="Total Workers"
          value={metrics.totalWorkers.value.toLocaleString()}
          trend={metrics.totalWorkers.trend}
          ariaLabel="Total number of registered workers"
        />
        <MetricCard
          title="Active Jobs"
          value={metrics.activeJobs.value.toLocaleString()}
          trend={metrics.activeJobs.trend}
          ariaLabel="Number of currently active jobs"
        />
        <MetricCard
          title="Completed Works"
          value={metrics.completedWorks.value.toLocaleString()}
          trend={metrics.completedWorks.trend}
          ariaLabel="Total number of completed work projects"
        />
        <MetricCard
          title="Total Wages"
          value={metrics.totalWages.value.toLocaleString()}
          unit=" INR"
          trend={metrics.totalWages.trend}
          ariaLabel="Total wages distributed in Indian Rupees"
        />
      </section>
    </div>
  );
};

export default Dashboard;
