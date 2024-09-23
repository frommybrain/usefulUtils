// ExtendedPhongMaterial.js
import * as THREE from 'three';
import { extendedPhongVertex } from './extendedVert';
import { extendedPhongFragment } from './extendedFrag';

class ExtendedPhongMaterial extends THREE.MeshPhongMaterial {
  constructor(parameters) {
    super(parameters);

    this.setValues(parameters);
    this.onBeforeCompile = (shader) => {
      shader.vertexShader = extendedPhongVertex;
      shader.fragmentShader = extendedPhongFragment;
    };
  }
}

export { ExtendedPhongMaterial };