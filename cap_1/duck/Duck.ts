import IFlyBehavior from "../fly_behavior/IFlyBehavior";
import IQuackBehavior from "../quack_behavior/IQuackBehavior";

export default abstract class Duck {
	flyBehavior: IFlyBehavior;

	quackBehavior: IQuackBehavior;

	performQuack() {
		this.quackBehavior.quack();
	}

	performFly() {
		this.flyBehavior.fly();
	}

	swim() {
		console.log("The duck are swimming")
	}

	abstract display():void;
}
