import React from 'react';
import useAlerts from '../hooks/useAlerts';

const SafetyAlerts: React.FC = () => {
    const alerts = useAlerts();

    return (
        <div className="safety-alerts">
            <h2>Safety Alerts</h2>
            {alerts.length === 0 ? (
                <p>No alerts at the moment.</p>
            ) : (
                <ul>
                    {alerts.map((alert, index) => (
                        <li key={index} className={`alert ${alert.type}`}>
                            {alert.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SafetyAlerts;