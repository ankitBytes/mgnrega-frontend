import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Trends.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Trends = () => {
  const [language, setLanguage] = useState('en');
  const [period, setPeriod] = useState('monthly');

  // Sample data for monthly employment trends (2024)
  const monthlyEmploymentData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Workers Employed (in thousands)',
        data: [245, 268, 312, 289, 356, 401, 378, 392, 345, 321, 298, 275],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Sample data for project completion rate
  const projectCompletionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Completion Rate (%)',
        data: [68, 72, 75, 71, 78, 82, 85, 88, 84, 81, 79, 76],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Sample data for fund utilization (in Crores)
  const fundUtilizationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Funds Allocated (₹ Crores)',
        data: [450, 475, 520, 495, 580, 625, 590, 610, 570, 540, 515, 490],
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
      },
      {
        label: 'Funds Utilized (₹ Crores)',
        data: [380, 412, 468, 425, 512, 563, 531, 549, 502, 475, 448, 421],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
      },
    ],
  };

  // Sample data for state-wise comparison (Top 10 states)
  const stateComparisonData = {
    labels: ['UP', 'Bihar', 'MP', 'WB', 'Rajasthan', 'Odisha', 'AP', 'Karnataka', 'Tamil Nadu', 'Maharashtra'],
    datasets: [
      {
        label: 'Active Projects',
        data: [1250, 1180, 1050, 980, 925, 850, 780, 720, 690, 650],
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="trends-container" role="main" aria-label="Employment Trends">
      <header className="trends-header">
        <h1 className="trends-title">
          {language === 'hi' ? 'रोजगार रुझान' : 'Employment Trends'}
        </h1>
        <p className="trends-subtitle">
          {language === 'hi'
            ? 'रोजगार पैटर्न और परियोजना पूर्णता रुझानों का विश्लेषण करें'
            : 'Analyze employment patterns and project completion trends'}
        </p>
      </header>

      <div className="trends-controls" role="group" aria-label="Chart controls">
        <div className="control-group">
          <label htmlFor="period-select">
            {language === 'hi' ? 'समय अवधि' : 'Time Period'}:
          </label>
          <select
            id="period-select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="period-select"
            aria-label="Select time period"
          >
            <option value="monthly">{language === 'hi' ? 'मासिक' : 'Monthly'}</option>
            <option value="quarterly">{language === 'hi' ? 'त्रैमासिक' : 'Quarterly'}</option>
            <option value="yearly">{language === 'hi' ? 'वार्षिक' : 'Yearly'}</option>
          </select>
        </div>
      </div>

      <div className="charts-grid">
        {/* Monthly Employment Chart */}
        <section className="chart-card" aria-labelledby="employment-chart-title">
          <h2 id="employment-chart-title" className="chart-title">
            {language === 'hi' ? 'मासिक रोजगार आंकड़े' : 'Monthly Employment Statistics'}
          </h2>
          <div className="chart-wrapper" role="img" aria-label="Line chart showing monthly employment statistics">
            <Line data={monthlyEmploymentData} options={chartOptions} />
          </div>
        </section>

        {/* Project Completion Rate Chart */}
        <section className="chart-card" aria-labelledby="completion-chart-title">
          <h2 id="completion-chart-title" className="chart-title">
            {language === 'hi' ? 'परियोजना पूर्णता दर' : 'Project Completion Rate'}
          </h2>
          <div className="chart-wrapper" role="img" aria-label="Line chart showing project completion rate">
            <Line data={projectCompletionData} options={chartOptions} />
          </div>
        </section>

        {/* Fund Utilization Chart */}
        <section className="chart-card" aria-labelledby="funds-chart-title">
          <h2 id="funds-chart-title" className="chart-title">
            {language === 'hi' ? 'निधि उपयोग रुझान' : 'Fund Utilization Trends'}
          </h2>
          <div className="chart-wrapper" role="img" aria-label="Bar chart showing fund utilization trends">
            <Bar data={fundUtilizationData} options={chartOptions} />
          </div>
        </section>

        {/* State-wise Comparison Chart */}
        <section className="chart-card" aria-labelledby="states-chart-title">
          <h2 id="states-chart-title" className="chart-title">
            {language === 'hi' ? 'राज्यवार तुलना' : 'State-wise Comparison'}
          </h2>
          <div className="chart-wrapper" role="img" aria-label="Bar chart showing state-wise comparison">
            <Bar data={stateComparisonData} options={chartOptions} />
          </div>
        </section>
      </div>

      {/* Data Summary */}
      <section className="data-summary" aria-labelledby="summary-title">
        <h2 id="summary-title">{language === 'hi' ? 'डेटा सारांश' : 'Data Summary'}</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <h3>{language === 'hi' ? 'कुल रोजगार (2024)' : 'Total Employment (2024)'}</h3>
            <p className="summary-value">3.9M</p>
            <p className="summary-change positive">+12.5% from 2023</p>
          </div>
          <div className="summary-card">
            <h3>{language === 'hi' ? 'औसत पूर्णता दर' : 'Average Completion Rate'}</h3>
            <p className="summary-value">78%</p>
            <p className="summary-change positive">+5.2% from 2023</p>
          </div>
          <div className="summary-card">
            <h3>{language === 'hi' ? 'कुल निधि उपयोग' : 'Total Fund Utilization'}</h3>
            <p className="summary-value">₹6,156 Cr</p>
            <p className="summary-change positive">+8.3% from 2023</p>
          </div>
          <div className="summary-card">
            <h3>{language === 'hi' ? 'औसत मजदूरी दिवस' : 'Average Wage Days'}</h3>
            <p className="summary-value">54 days</p>
            <p className="summary-change positive">+2.1% from 2023</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trends;
