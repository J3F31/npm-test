import { Color3, MeshBuilder, StandardMaterial } from 'babylonjs'

const types = ['sphere', 'cube']

export function helloWorld() {
	const message = 'Hello World from my example modern npm package!';
	return message;
}
  
export function goodBye() {
	const message = 'Goodbye from my example modern npm package!';
	return message;
}

export function TestMesh(name: string, type: string, size: number, scene: any, materialColor: Color3) {
	if (!types.includes(type)) {
		console.error(`type must be: ${types}`)
		return
	}
	const mesh = 
		type == 'sphere'? MeshBuilder.CreateSphere(name, {diameter: size}, scene) : 
		type == 'cube'? MeshBuilder.CreateBox(name, {size: size}, scene) : null;
	const mat = new StandardMaterial("generatedMat", scene);
	mat.diffuseColor = materialColor;
	return mesh;
}
  
export default {
	helloWorld,
	goodBye,
	TestMesh
};