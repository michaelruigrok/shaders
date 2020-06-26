#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 ms = u_mouse / u_resolution;
	gl_FragColor = vec4((st.x + ms.x) / 2.0 ,
                        (st.y + ms.y) / 2.,
                        abs(sin(u_time / 2.)),1.0);
}
