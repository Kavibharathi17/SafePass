import React from 'react';
import useAlerts from '../hooks/useAlerts';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
    const alerts = useAlerts();
    const zones = [
        { name: 'Area A', count: 120, level: 'High Crowd', color: 'zone-high', icon: '1' },
        { name: 'Area B', count: 55, level: 'Medium Crowd', color: 'zone-medium', icon: '2' },
        { name: 'Area C', count: 20, level: 'Low Crowd', color: 'zone-low', icon: '3' },
    ];

    const primaryAlert = alerts.find((alert) => alert.severity === 'danger')?.message ?? 'High Crowd in Area A!';

    return (
        <div className="prototype-dashboard">
            <h1 className="prototype-title">CrowdSense Prototype</h1>

            <div className="zones-row">
                {zones.map((zone) => (
                    <div key={zone.name} className={`zone-card ${zone.color}`}>
                        <h3>{zone.name}:</h3>
                        <p>{zone.level}</p>
                    </div>
                ))}
            </div>

            <section className="panel-section">
                <h2>Alerts:</h2>
                <div className="alert-line">⚠ {primaryAlert}</div>
            </section>

            <section className="panel-section">
                <h2>Simulate Crowds</h2>
                <div className="simulate-buttons">
                    <button type="button" className="btn btn-increase">
                        Increase Crowd
                    </button>
                    <button type="button" className="btn btn-decrease">
                        Decrease Crowd
                    </button>
                </div>
            </section>

            <section className="panel-section">
                <h2>Crowd Levels:</h2>
                <ul className="crowd-level-list">
                    {zones.map((zone) => (
                        <li key={`${zone.name}-level`}>
                            <span className={`level-badge ${zone.color}`}>{zone.icon}</span>
                            <strong>{zone.name}:</strong> {zone.count} People
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;