import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import SafetyAlerts from '../components/SafetyAlerts';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Dashboard />
            <SafetyAlerts />
        </div>
    );
};

export default HomePage;