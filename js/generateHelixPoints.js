const generateHelixPoints = (
    numPoints = 100,
    radius = 50,
    height = 200,
    rotations = 3
) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const t = i / (numPoints - 1);
        const angle = 2 * Math.PI * rotations * t;
        const x = radius * Math.cos(angle);
        const y = height * t;
        const z = radius * Math.sin(angle);
        points.push([x, y, z]);
    }
    return points;
};

// Use like this:
const curvePoints = generateHelixPoints();
console.log(curvePoints);