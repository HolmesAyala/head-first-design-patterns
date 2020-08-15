import MallardDuck from "./duck/MallardDuck";
import ModelDuck from "./duck/ModelDuck";
import FlyRocketPowered from "./fly_behavior/FlyRocketPowered";
import DuckCallDevice from "./DuckCallDevice";

function main() {
	const mallardDuck: MallardDuck = new MallardDuck();

	mallardDuck.performFly();
	mallardDuck.performQuack();

	const modelDuck: ModelDuck = new ModelDuck();

	modelDuck.performFly();
	modelDuck.flyBehavior = new FlyRocketPowered();
	modelDuck.performFly();

	const duckCallDevice = new DuckCallDevice();

	duckCallDevice.performQuack();
}

main();
