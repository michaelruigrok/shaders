#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

bool DEBUG = true;

float zoom(float mouse, float pt) {

	float zoom = abs(mouse * 2.0 - 1.0) + 1.0; // 1 < zoom <= 2
	float newPos = pt / zoom;

	if (mouse > 0.5) {
		newPos += mouse - 0.5; // Align zoom flush to the ceiling
							   // It's the floor that's supposed to scale
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
						abs(sin(u_time / 4.)) * 0.8 - 0.1,
						1.0);
}
