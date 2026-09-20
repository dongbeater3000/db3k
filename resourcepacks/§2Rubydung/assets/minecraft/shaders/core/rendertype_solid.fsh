#version 150
#extension GL_ARB_shader_bit_encoding : require

#moj_import <fog.glsl>

uniform sampler2D Sampler0;

uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform vec4 FogColor;

in float vertexDistance;
in vec4 vertexColor;
in vec2 texCoord0;
in vec4 normal;
in vec3 chunkPos;

out vec4 fragColor;

const uint k = 1103515245U;
vec3 uhash3(uvec3 x) {
    x = ((x >> 8U) ^ x.yzx) * k;
    x = ((x >> 8U) ^ x.yzx) * k;
    x = ((x >> 8U) ^ x.yzx) * k;
    return vec3(x) / float(0xffffffffU);
}

vec3 hash(vec3 f) { 
    return uhash3(floatBitsToUint(f));
}

void main() {
    vec4 color = texture(Sampler0, texCoord0) * vertexColor * ColorModulator;
    
    vec3 blockPos = floor(chunkPos);
    vec3 randomColor = hash(mod(blockPos, 16.0));
    
    randomColor = randomColor * 0.8 + 0.2;
    
    float overlayStrength = 0.3;
    color.rgb = mix(color.rgb, color.rgb * randomColor, overlayStrength);
    
    fragColor = linear_fog(color, vertexDistance, FogStart, FogEnd, FogColor);
}