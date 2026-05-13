export const getCrowdStatus = (count: number): string => {
    if (count < 50) {
        return "Low";
    } else if (count < 100) {
        return "Moderate";
    } else {
        return "High";
    }
};

export const generatePredictionMessage = (count: number): string => {
    if (count < 50) {
        return "Crowd is manageable.";
    } else if (count < 100) {
        return "Crowd is increasing, monitor closely.";
    } else {
        return "High crowd density, take precautions.";
    }
};