import React from 'react';
import useCrowdData from '../hooks/useCrowdData';

const CrowdMap: React.FC = () => {
    const crowdData = useCrowdData();

    return (
        <div className="crowd-map">
            <h2>Crowd Distribution Map</h2>
            <div className="map-container">
                <p>Map visualization would go here</p>
                <ul>
                    {crowdData.map((data, index) => (
                        <li key={index}>
                            <strong>{data.time}</strong>: {data.count} people
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CrowdMap;