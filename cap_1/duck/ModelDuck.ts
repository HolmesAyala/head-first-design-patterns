import Duck from "./Duck";
import FlyNoWay from "../fly_behavior/FlyNoWay";
import Quack from "../quack_behavior/Quack";

export default class ModelDuck extends Duck {

	constructor() {
		super()

		this.flyBehavior = new FlyNoWay()
		this.quackBehavior = new Quack()
	}

	display() {
		console.log("I'm a ModelDuck")
	}

}