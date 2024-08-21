// LiquidShader.js
export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

export const fragmentShader = `
  uniform sampler2D texture;
  uniform float time;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    uv.y += sin(time + uv.x * 10.0) * 0.1; // Liquid distortion effect
    gl_FragColor = texture2D(texture, uv);
  }
`;
