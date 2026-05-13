import { useState, useEffect } from 'react';

interface CrowdData {
  time: string;
  count: number;
}

const useCrowdData = (): CrowdData[] => {
  const [data, setData] = useState<CrowdData[]>([]);

  useEffect(() => {
    setData([
      { time: '10:00 AM', count: 45 },
      { time: '11:00 AM', count: 52 },
      { time: '12:00 PM', count: 68 },
      { time: '1:00 PM', count: 75 },
      { time: '2:00 PM', count: 82 },
      { time: '3:00 PM', count: 90 },
      { time: '4:00 PM', count: 78 },
    ]);
  }, []);

  return data;
};

export default useCrowdData;