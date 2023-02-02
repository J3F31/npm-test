import { MeshBuilder } from 'babylonjs'

export function helloWorld() {
	const message = 'Hello World from my example modern npm package!';
	return message;
}
  
export function goodBye() {
	const message = 'Goodbye from my example modern npm package!';
	return message;
}

export function TestMesh(name: string, diameter: number, scene: any) {
	const ball = MeshBuilder.CreateSphere(name, {diameter: diameter}, scene);
	return ball;
}

export function Some() {
	const message = 'aa';
	return message;
}
  
export default {
	helloWorld,
	goodBye,
	TestMesh,
	Some
};