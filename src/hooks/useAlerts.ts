import { useState, useEffect } from 'react';

interface Alert {
  message: string;
  severity: 'info' | 'warning' | 'danger';
  title?: string;
  type?: string;
}

const useAlerts = (): Alert[] => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    setAlerts([
      { message: 'Zone A is overcrowded!', severity: 'danger', title: 'High Crowd', type: 'danger' },
      { message: 'Zone B crowd level normal', severity: 'info', title: 'Normal', type: 'info' },
      { message: 'Zone C approaching capacity', severity: 'warning', title: 'Warning', type: 'warning' },
    ]);
  }, []);

  return alerts;
};

export default useAlerts;