import { Color3, MeshBuilder, PBRMaterial, StandardMaterial, Vector3 } from '@babylonjs/core'

const types = ['sphere', 'cube']

export function helloWorld() {
	const message = 'Hello World from my example modern npm package!';
	return message;
}
  
export function goodBye() {
	const message = 'Goodbye from my example modern npm package!';
	return message;
}

export function TestMesh(name: string, type: string, size: number, material: StandardMaterial | PBRMaterial, position: Vector3, scene: any) {
	if (!types.includes(type)) {
		console.error(`type must be: ${types}`)
		return
	}
	const mesh = 
		type == 'sphere'? MeshBuilder.CreateSphere(name, {diameter: size}, scene) : 
		type == 'cube'? MeshBuilder.CreateBox(name, {size: size}, scene) : null;
	const mat = material;
	mesh!.material = mat;
	mesh!.position = position;
	return mesh;
}
  
export default {
	helloWorld,
	goodBye,
	TestMesh
};