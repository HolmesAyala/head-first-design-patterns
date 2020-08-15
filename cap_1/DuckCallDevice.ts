import IQuackBehavior from "./quack_behavior/IQuackBehavior";
import Quack from "./quack_behavior/Quack";

export default class DuckCallDevice {

	quackBehavior:IQuackBehavior

	constructor() {
		this.quackBehavior = new Quack()
	}

	performQuack() {
		this.quackBehavior.quack()
	}
}