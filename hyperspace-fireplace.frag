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
	
	float pct = 0.9 * tan(sin(cos(x) * u_time/2.5) + u_time/2.);

	// Mix uses pct (a value from 0-1) to
	// mix the two colors
	color = mix(colorA, colorB, pct);
	color -= floor((y + sin(y + u_time)));
	
	gl_FragColor = vec4(color,1.0);
}
