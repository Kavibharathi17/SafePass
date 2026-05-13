import React from 'react';
import  useAlerts  from '../hooks/useAlerts';

const AlertsPage: React.FC = () => {
    const alerts  = useAlerts();

    return (
        <div className="alerts-page">
            <h1>Safety Alerts</h1>
            {alerts.length === 0 ? (
                <p>No alerts at the moment.</p>
            ) : (
                <ul>
                    {alerts.map((alert, index) => (
                        <li key={index} className={`alert ${alert.type}`}>
                            <strong>{alert.title}</strong>: {alert.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AlertsPage;