import IQuackBehavior from "./IQuackBehavior";

export default class Quack implements IQuackBehavior {
	quack() {
		console.log("Quack sound!");
	}
}
