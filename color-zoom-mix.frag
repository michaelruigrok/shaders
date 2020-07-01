#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

bool DEBUG = true;

float zoom(float mouse, float pt) {
	float newPos;

	if (mouse > 0.5) {
		newPos = mix(mouse - 0.5, 1.0, pt);
	} else {
		newPos = mix(0.0, mouse + 0.5, pt);
	}

	if (DEBUG && newPos > 0.495 && newPos < 0.505) {
		newPos = 0.0;
	}

	return newPos;
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 ms = u_mouse/u_resolution;
	
	gl_FragColor = vec4(zoom(ms.x, st.x),
						zoom(ms.y, st.y),
						abs(sin(u_time / 4.0)) * 0.8 - 0.1,
						1.0);

}
