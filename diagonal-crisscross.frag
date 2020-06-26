#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

	// Step will return 0.0 unless the value is over 0.5,
	// in that case it will return 1.0
	float y = step(0.5, (st.y + st.x )/ 2.0);

	vec3 color = vec3(y + st.y - st.x);

	gl_FragColor = vec4(color,1.0);
}

