export const generateToroidalSpiralPoints = (
    numPoints = 100,
    torusRadius = 200,  // Distance from the center of the torus to the center of the tube
    tubeRadius = 50,    // Radius of the tube
    numRevolutions = 3, // Number of times the helix goes around the torus
    offset = 0,         // Offset in radians, 0 to 2*Math.PI
    plane = 'xy'        // The plane on which to generate the points: 'xy' or 'xz'
) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const t = i / (numPoints - 1);
        const u = 2 * Math.PI * numRevolutions * t + offset;  // Angle around the tube
        const v = 2 * Math.PI * t;  // Angle around the torus

        // Calculate coordinates based on the selected plane
        let x, y, z;
        if (plane === 'xy') {
            x = (torusRadius + tubeRadius * Math.cos(u)) * Math.cos(v);
            y = (torusRadius + tubeRadius * Math.cos(u)) * Math.sin(v);
            z = tubeRadius * Math.sin(u);
        } else if (plane === 'xz') {
            x = (torusRadius + tubeRadius * Math.cos(u)) * Math.cos(v);
            y = tubeRadius * Math.sin(u);
            z = (torusRadius + tubeRadius * Math.cos(u)) * Math.sin(v);
        } else {
            throw new Error(`Invalid plane specified: ${plane}. Use 'xy' or 'xz'.`);
        }

        points.push([x, y, z]);
    }
    return points;
};
