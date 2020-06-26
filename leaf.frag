// Author: Inigo Quiles
// Title: Expo

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
	return  smoothstep( pct-0.02, pct, st.y) -
		smoothstep( pct, pct+0.02, st.y);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

	float y = pow(st.x,0.5);
	float y2 = pow(st.x,2.0);

	vec3 color = vec3(y + y2) / 2.0;

	float pct = plot(st,y) + plot(st,y2)
		+ plot(st, color.x);


	color = 
		// The colour value of the plot
		pct * vec3(0.905,0.249,0.319)
		+
		// Background color, subtracted from the plot
		(1.0 - pct) * color;

	gl_FragColor = vec4(color,1.0);
}
