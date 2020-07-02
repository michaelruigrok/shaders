#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.565,0.051);

void main() {
	vec3 color = vec3(0.0);
	float x = gl_FragCoord.x;
	float y = gl_FragCoord.y;

	float pct = x * sin( 1. / cos(u_time));

	color = mix(colorA, colorB, pct);

	color -= (y * 2.);

	gl_FragColor = vec4(color, .8);
}
