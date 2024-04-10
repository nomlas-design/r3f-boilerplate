const vertex = /* glsl */ `

  uniform float uTime;
  uniform sampler2D uTexture;
  varying float vTime;
  varying vec2 vUv;

  void main() {

    vUv = uv;
    vTime = uTime;

    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
  }
`;

export default vertex;
