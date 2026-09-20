vec2 texCord = texCoord0;
if (isNeg != 0)
    texCord.y = -texCord.y + ScrSize.y / 64; //Inverse poem

ivec2 block = ivec2(texCord);
bool variate;
vec2 offset = vec2(0);
vec4 modulator = vec4(1);

color = texture(Sampler0, (texCord - block + offset) / 5) * modulator;
#ifndef POSITION_TEX
color *= vertexColor;
#endif