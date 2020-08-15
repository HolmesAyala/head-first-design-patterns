import IFlyBehavior from "./IFlyBehavior";

export default class FlyRocketPowered implements IFlyBehavior {
	fly() {
		console.log("Flying with rocket powered!")
	}
}