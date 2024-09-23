export const generateCirclePoints = (numPoints = 100, radius = 50) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = 0; 
        const z = radius * Math.sin(angle);
        points.push([x, y, z]);
    }
    return points;
};

// Use like this:
//const curvePoints = generateCirclePoints();
//console.log(curvePoints);
