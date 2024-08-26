# usefulUtils

A bunch of utils I made to help me do shit. 

## Python Scripts

### `getCurvePoints.py`

This is a script I run in blender to return the points of a bezier curve. To use this you will need to open up blender via terminal:

1. **Open Blender via Terminal**:
   - On a Mac, navigate to the Applications folder.
   - Right-click Blender and select "Show Package Contents."
   - Go to `Contents > MacOS` and drag the Blender application into your terminal, then hit enter.

2. **Run the Script**:
   - Once Blender is open, select your curve.
   - Switch to the Scripting mode in Blender.
   - Run the `getCurvePoints.py` script.

The outputted coordinates will be available in the terminal as an array of points, ready to be used in ThreeJS.

## JavaScript/JSX Scripts

### `generateHelixPoints`

This script generates a helix curve and returns an array of curve points.

**Usage**:
```javascript
const curvePoints = generateHelixPoints(numPoints, radius, height, rotations);
console.log(curvePoints);

### `generateToroidalSpiralPoints`

This script generates a toroidal spiral and returns an array of curve points.

**Usage**:
```javascript
const curvePoints = generateToroidalSpiralPoints(numPoints, torusRadius, tubeRadius, numRevolutions, offset);
console.log(curvePoints);


### `visualiseCurve`

Visualise your curve by rendering red spheres at each point along the curve. It requires you to feed it both the curve points and the curve itself.

**Usage**:
```javascript
const curves = useMemo(() => {
    const points = curvePoints.map(point => new THREE.Vector3(point[0], point[1], point[2]));
    const curve = new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.5);
    return [curve];
}, [curvePoints]);


Feed the curvePoints (an array of your curve points) into the visualization script, and it will display them as red spheres. Additionally, provide the curves—typically, a CatmullRomCurve3 curve generated from the points.



