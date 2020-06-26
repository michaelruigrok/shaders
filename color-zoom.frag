#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

bool DEBUG = true;

float zoom(float mouse, float pt) {
	float zoom;

	if (mouse > 0.5) {
		//x.max = 1
		//0 <= x.min <= 0.5
		
		float stretchOffset = mouse - 0.5; // 0 <= stretchOffset <= 0.5
		// mouse = 0.5 ~~ zoom = *1
		// mouse = 1   ~~ zoom = *.5
		zoom = pt * (1.0 - stretchOffset) + stretchOffset;

		if (DEBUG && zoom >= 1.0) zoom = 0.0;
		if (DEBUG && pt < 0.02) zoom = 1.0;
	} else {
		//x.min = 0
		//0.5 <= x.max <= 1

		// mouse = 0.5 ~~ zoom = *1
		// mouse = 0   ~~ zoom = *.5
		zoom = pt * (0.5 + mouse);
		if (DEBUG && zoom <= 0.0) zoom = 1.0;
		if (DEBUG && pt > 0.98) zoom = 0.0;
	}

	if (DEBUG && zoom > 0.495 && zoom < 0.505) {
		zoom = 0.0;
	}

	return zoom;
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 ms = u_mouse/u_resolution;
	
	gl_FragColor = vec4(zoom(ms.x, st.x),
						zoom(ms.y, st.y),
						abs(sin(u_time / 4.)) * 0.8 - 0.1,
						1.0);
}
