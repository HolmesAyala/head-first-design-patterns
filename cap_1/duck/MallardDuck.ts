import Duck from "./Duck";
import Quack from "../quack_behavior/Quack";
import FlyWithWings from "../fly_behavior/FlyWithWings";

export default class MallardDuck extends Duck {

	constructor() {
		super()

		this.flyBehavior = new FlyWithWings()
		this.quackBehavior = new Quack()
	}

	display() {
		console.log("I'm a Mallard Duck!")
	}
}