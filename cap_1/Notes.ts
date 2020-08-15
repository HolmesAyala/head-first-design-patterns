interface IFlyBehavior {
	fly: () => void
}

interface IQuackBehavior {
	quack: () => void
}

// Behaviors implementation

class FlyWithWings implements IFlyBehavior {

	fly() {
		// Some logic
	}

}

class Squeak implements IQuackBehavior {

	quack() {
		// Implementation of rubber duck
	}

}

/**
 * Questions
 */

/**
 * 1 - What would you do if you want to add the rockect-powered flying
 */

class RocketPowered implements IFlyBehavior {

	fly() {
		// Implement the powered behavior
	}

}

/**
 * Recomendations:
 * 
 * Rename to: FlyRocketPowered
 */

/**
 * 2 - Can you think a different entity class to duck
 * that can uses the quack behavior?
 */

/**
 * Answer: I don't have idea
 */

/**
 * Correction: A devide that make the duck sound is an example
 */



 