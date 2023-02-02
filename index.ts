export function helloWorld() {
	const message = 'Hello World from my example modern npm package!';
	return message;
}
  
export function goodBye() {
	const message = 'Goodbye from my example modern npm package!';
	return message;
}

export function TestMesh() {
	const ball = MeshBuilder.CreateSphere("ball", {diameter: 1}, this.scene);
	return ball;
}
  
export default {
	helloWorld,
	goodBye,
	TestMesh,
};