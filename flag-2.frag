#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.300,0.235,0.153);
vec3 colorB = vec3(0.806,0.400,1.000);

void main() {
	vec3 color = vec3(0.0);
	float x = gl_FragCoord.x;
	float y = gl_FragCoord.y;

	float pct = x * sin( cos(u_time));

	color = mix(colorA, colorB, pct);

	color -= y/ 1.4;

	gl_FragColor = vec4(color, 1.0);
}
