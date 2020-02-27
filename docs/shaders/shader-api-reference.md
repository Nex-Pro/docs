# Shader API reference

> All the different parts to creating a shader

## Shader on a shape

-   Create a **box entity** and change the shape to whatever you like
-   Scroll down and update the **user data** json accordingly

```json
{
	"ProceduralEntity": {
		// required
		"version": 3, // recommended version is 3

		// urls
		"fragmentShaderURL": "https://example.com/shader.fs", // for frag
		"vertexShaderURL": "https://example.com/shader.vs", // for vertex

		// optional
		"channels": [], // string array with maximum of 4 urls
		"uniforms": {} // map of uniform keys that will be used in the shader
	}
}
```

## Shader on a model

-   Create a **material entity** and set the **url to `materialData`**
-   Make sure to set the **parent id** of the material entity to the model's entity id
-   Scroll down and update the **material data** json accordingl

```json
{
	"materials": {
		"model": "hifi_shader_simple", // is required
		"procedural": {
			// same as above e.g. shaderUrl, version
		}
	}
}
```

## Functions and variables

These are all the available things when you use **version 3** which is most recommended

```glsl
// from the uniforms map in the json
uniform float myCustomNumber = 10;
uniform vec3 myCustomColor = vec3(1,0,0);

// these are the values you have access to in getProceduralFragment
// you don't need to copy and paste this into your file
struct ProceduralFragment {
    vec3 normal;
    vec3 diffuse;
    vec3 specular;
    vec3 emissive;
    float alpha;
    float roughness;
    float metallic;
    float occlusion;
    float scattering;
};

// this function is required when you specify version 3
float getProceduralFragment(inout ProceduralFragment frag) {

    // seconds from 0 when the entity has been loaded
    float time = iGlobalTime;

    vec4 screenCoords = _positionES; // (eye) screen coords
    vec4 coords = _positionMS; // model coords

    vec2 texCoords = _texCoord01;

    vec3 worldScale = iWorldScale;
    vec3 worldPosition = iWorldPosition;
    mat4 worldOrientation = iWorldOrientation; // used with inverse usually
    vec3 worldEyePos = getEyeWorldPos(); // exact camera position

    // get rgba with uv from texture iChannel0 up to 3
    vec4 color = texture(iChannel0, vec2(0,0));

    // dont forget to modify frag before the function returns
    frag.diffuse = color.rgb;

    discard; // this will discard the pixel and render through it

    return 0;

    // other values that aren't used often
    // iDate
    // iLocalCreatedTime
    // iEntityTime
    // iFrameCount
    // iChannelResolution
}

// struct used in getProceduralVertex. don't need to copy into your shader
struct ProceduralVertexData {
    vec4 position;
    vec4 nonSkinnedPosition;    // input only
    vec3 normal;
    vec3 nonSkinnedNormal;      // input only
    vec3 tangent;               // input only
    vec3 nonSkinnedTangent;     // input only
    vec4 color;
    vec2 texCoord0;
};

// this function is required when you want to make a vertex shader
void getProceduralVertex(inout ProceduralVertexData vert) {
    // edit any of the values in vert!
}
```
