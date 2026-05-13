import React from 'react';
import { Line } from 'react-chartjs-2';
import useCrowdData from '../hooks/useCrowdData';
import  useAlerts  from '../hooks/useAlerts';

const RealTimeStats: React.FC = () => {
    const crowdData  = useCrowdData();
    const alerts  = useAlerts();

    const data = {
        labels: crowdData.map((data) => data.time),
        datasets: [
            {
                label: 'Crowd Count',
                data: crowdData.map((data) => data.count),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="real-time-stats">
            <h2>Real-Time Crowd Analytics</h2>
            <Line data={data} />
            <div className="predictions">
                <h3>AI Predictions</h3>
                {alerts.map((alert, index) => (
                    <div key={index} className="alert">
                        {alert.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RealTimeStats;