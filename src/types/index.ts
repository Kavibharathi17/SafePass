export interface CrowdData {
    zone: string;
    count: number;
    status: 'low' | 'medium' | 'high';
}

export interface Alert {
    id: number;
    message: string;
    severity: 'info' | 'warning' | 'danger';
    timestamp: Date;
}