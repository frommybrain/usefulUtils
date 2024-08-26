import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CurveVisualisation = ({ curvePoints, curves }) => {
    const linesRef = useRef([]);

    const curveObjects = useMemo(() => {
        return curves.map(curve => {
            if (curve instanceof THREE.Curve) {
                return curve;
            } else if (typeof curve.getPoints === 'function') {
                return new THREE.CatmullRomCurve3(curve.getPoints(200));
            }
            return null;
        }).filter(Boolean);
    }, [curves]);

    useFrame(() => {
        curveObjects.forEach((curve, index) => {
            if (linesRef.current[index]) {
                linesRef.current[index].geometry.setFromPoints(curve.getPoints(200));
            }
        });
    });

    return (
        <>
            {/* Show points as spheres */}
            {curvePoints.map((point, index) => (
                <mesh key={index} position={new THREE.Vector3(...point)}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            ))}

            {/* Show curves as lines */}
            {curveObjects.map((curve, index) => (
                <line key={index} ref={el => linesRef.current[index] = el}>
                    <bufferGeometry />
                    <lineBasicMaterial color="blue" linewidth={2} />
                </line>
            ))}
        </>
    );
};

{/*
NOTES:

I like to create the curve itself like this. Feed it your curve points, change the CatmulRomCurve3 settings to how you like, and then use this as the curves prop in CurveVisualisation

const curves = useMemo(() => {
        const points = curvePoints.map(point => new THREE.Vector3(point[0], point[1], point[2]));
        const curve = new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.5);
        return [curve];
}, [curvePoints]);

*/}