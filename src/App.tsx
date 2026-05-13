import React, { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { FaArrowDown, FaArrowUp, FaCircle, FaExclamationTriangle, FaUsers } from 'react-icons/fa';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import './styles/App.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type CrowdStatus = 'Low Crowd' | 'Medium Crowd' | 'High Crowd';

interface ZoneData {
  id: string;
  name: string;
  crowd: number;
  status: CrowdStatus;
}

const getCrowdStatus = (value: number): CrowdStatus => {
  if (value <= 50) return 'Low Crowd';
  if (value <= 100) return 'Medium Crowd';
  return 'High Crowd';
};

const renderIcon = (Icon: any, className?: string) =>
  React.createElement(Icon, { className });

const App: React.FC = () => {
  const [zones, setZones] = useState<ZoneData[]>([
    { id: 'A', name: 'Zone A', crowd: 120, status: 'High Crowd' },
    { id: 'B', name: 'Zone B', crowd: 55, status: 'Medium Crowd' },
    { id: 'C', name: 'Zone C', crowd: 20, status: 'Low Crowd' },
  ]);
  const [alertMessage, setAlertMessage] = useState('High Crowd in Zone A!');

  useEffect(() => {
    setZones((prev) =>
      prev.map((zone) => ({
        ...zone,
        status: getCrowdStatus(zone.crowd),
      })),
    );
  }, []);

  useEffect(() => {
    const highZone = zones.find((zone) => zone.status === 'High Crowd');
    if (highZone) {
      setAlertMessage(`High Crowd in ${highZone.name}!`);
      return;
    }

    const mediumZone = zones.find((zone) => zone.status === 'Medium Crowd');
    if (mediumZone) {
      setAlertMessage(`${mediumZone.name} has medium crowd density.`);
      return;
    }

    setAlertMessage('All zones are currently in low crowd range.');
  }, [zones]);

  const simulateCrowd = (direction: 'increase' | 'decrease') => {
    setZones((prev) =>
      prev.map((zone) => {
        const delta = direction === 'increase' ? 12 : -12;
        const variance = zone.id === 'A' ? 6 : zone.id === 'B' ? 3 : 2;
        const nextValue = Math.max(0, zone.crowd + delta + variance);

        return {
          ...zone,
          crowd: nextValue,
          status: getCrowdStatus(nextValue),
        };
      }),
    );
  };

  const chartData = useMemo(
    () => ({
      labels: zones.map((zone) => zone.name),
      datasets: [
        {
          label: 'People Count',
          data: zones.map((zone) => zone.crowd),
          borderRadius: 8,
          backgroundColor: zones.map((zone) => {
            if (zone.status === 'High Crowd') return '#ef4444';
            if (zone.status === 'Medium Crowd') return '#facc15';
            return '#22c55e';
          }),
        },
      ],
    }),
    [zones],
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#d1d5db',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#d1d5db' },
        grid: { color: 'rgba(255, 255, 255, 0.06)' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#d1d5db' },
        grid: { color: 'rgba(255, 255, 255, 0.06)' },
      },
    },
  };

  return (
    <div className="safepass-layout">
      <div className="prototype-shell">
        <header className="app-header">
          <h1>SafePass</h1>
          <p>Smart Crowd Intelligence System</p>
        </header>

        <section className="panel">
          <h2 className="section-title">Crowd Status</h2>
          <div className="zone-row">
            {zones.map((zone) => (
              <article
                key={zone.id}
                className={`zone-card ${
                  zone.status === 'High Crowd'
                    ? 'zone-high'
                    : zone.status === 'Medium Crowd'
                      ? 'zone-medium'
                      : 'zone-low'
                }`}
              >
                <h3>{zone.name}</h3>
                <p>{zone.status}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2 className="section-title">Alerts:</h2>
          <div className="alert-box">
            {renderIcon(FaExclamationTriangle)}
            <span>{alertMessage}</span>
          </div>
        </section>

        <section className="panel">
          <h2 className="section-title">Simulate Crowds</h2>
          <div className="button-row">
            <button type="button" className="sim-btn increase-btn" onClick={() => simulateCrowd('increase')}>
              {renderIcon(FaArrowUp)} Increase Crowd
            </button>
            <button type="button" className="sim-btn decrease-btn" onClick={() => simulateCrowd('decrease')}>
              {renderIcon(FaArrowDown)} Decrease Crowd
            </button>
          </div>
        </section>

        <section className="panel">
          <h2 className="section-title">Crowd Levels:</h2>
          <ul className="levels-list">
            {zones.map((zone) => (
              <li key={`${zone.id}-level`}>
                {renderIcon(
                  FaCircle,
                  zone.status === 'High Crowd'
                    ? 'dot-high'
                    : zone.status === 'Medium Crowd'
                      ? 'dot-medium'
                      : 'dot-low',
                )}
                {renderIcon(FaUsers, 'users-icon')}
                <strong>{zone.name}:</strong> {zone.crowd} People
              </li>
            ))}
          </ul>
        </section>

        <section className="panel chart-panel">
          <h2 className="section-title">Live Crowd Overview</h2>
          <div className="chart-wrap">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;