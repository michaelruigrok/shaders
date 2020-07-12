
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 modelPosition;
//varying vec3 worldPosition;

void main() {
	//vec2 st = mod(v_uv/50., 1.);
	vec2 st = modelPosition.xy * 2.;
	//vec2 st = mod(gl_FragCoord.xy/10., 1.);

	//vec3 color = vec3(st, .0);
	vec3 color = vec3(modelPosition.x + .5);

	if (color.x == 1.) {
		color.x = 0.;
	}

	gl_FragColor = vec4(color,1.0);
}

