export const generateToroidalSpiralPoints = (
    numPoints = 100,
    torusRadius = 200,  // Distance from center of the spirals to the center of the tube
    tubeRadius = 50,    // Radius of the tube
    numRevolutions = 3, // Number of times the helix goes round th torus
    offset = 0          // Offset in radians, 0 to 2*Math.PI
) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const t = i / (numPoints - 1);
        const u = 2 * Math.PI * numRevolutions * t + offset;  
        const v = 2 * Math.PI * t;  

        const x = (torusRadius + tubeRadius * Math.cos(u)) * Math.cos(v);
        const y = (torusRadius + tubeRadius * Math.cos(u)) * Math.sin(v);
        const z = tubeRadius * Math.sin(u);

        points.push([x, y, z]);
    }
    return points;
};

// Use like this:
const curvePoints = generateToroidalSpiralPoints();
console.log(curvePoints);