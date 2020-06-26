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
		
		// mouse = 0.5 iff zoom = *1
		// mouse = 1   iff zoom = *2
		float zoom = mouse * 2.0; // 1 < zoom <= 2

		newPos = pt / zoom
		   	+ mouse - 0.5; // Align zoom flush to the ceiling
						   // It's the floor that's supposed to scale

		if (DEBUG && newPos >= 1.0) newPos = 0.0;
		if (DEBUG && pt < 0.02) newPos = 1.0;

	} else {

		// mouse = 0.5 iff zoom = *1
		// mouse = 0   iff zoom = *2
		float zoom = (1.0 - mouse) * 2.0; // 1 < zoom <= 2

		newPos = pt / zoom;

		if (DEBUG && newPos <= 0.0) newPos = 1.0;
		if (DEBUG && pt > 0.98) newPos = 0.0;
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
						zoom(ms.x, st.x),
						zoom(ms.x, st.x),
						1.0);
}
