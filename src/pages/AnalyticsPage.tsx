import React from 'react';
import { Line } from 'react-chartjs-2';
import useCrowdData from "../hooks/useCrowdData";

const AnalyticsPage: React.FC = () => {
    const crowdData = useCrowdData();

    const data = {
        labels: crowdData.map((dataPoint) => dataPoint.time),
        datasets: [
            {
                label: 'Crowd Count',
                data: crowdData.map((dataPoint) => dataPoint.count),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div>
            <h1>Crowd Analytics</h1>
            <Line data={data} />
        </div>
    );
};

export default AnalyticsPage;