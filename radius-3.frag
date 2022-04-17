#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform sampler2D u_tex0;
uniform float u_tex0Resolution;

float rand(vec2 co) {
	    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 ms = normalize(u_mouse/u_resolution);

	st.x = min(st.x, st.y);
	st.y = min(st.x, st.y);

	st *= 2.0;
	st -= 1.0;

	st.x += sin(u_time) / 3.;
	st.y += cos(u_time) / 3.;

	vec3 color = texture2D(u_tex0, st).rgb;

	float y = 1.0 - sqrt(dot(st, st));
	color *= vec3(y);

	gl_FragColor = vec4(color, 1.0);
}
