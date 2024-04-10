const fragment = /* glsl */ `

  varying float vTime;
  varying vec2 vUv;

  void main() {
      
     gl_FragColor = vec4(vUv.x, vUv.y, 0.5, 1.0);

    }
  `;

export default fragment;
