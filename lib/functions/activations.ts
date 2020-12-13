/**
 * Activation functions are mathematical equations that determine the output of a neural network.
 * The function is attached to each neuron in the network, and determines whether it should be activated (“fired”) or not,
 * based on whether each neuron's input is relevant for the model's prediction.
 *
 * Usage:
 * ```ts
 * import ActivationFunctions from '@ascentcore/dataspot/functions/activations'
 *
 * const value = ActivationFunctions.sigmoid(0.5)
 * ```
 *
 * Representation for all activation functions supported by dataspot:
 * @sample_only documentation/activationFunctions
 */
export default class ActivationFunctions {
    static identity(x: number): number {
        return x
    }

    static sigmoid(x: number): number {
        return 1 / (1 + Math.E ** -x)
    }

    static binary(x: number): number {
        return x > 0 ? 1 : 0
    }

    static relu(x: number): number {
        return Math.max(0, x)
    }

    static leakyRelu(x: number): number {
        return Math.max(0.01 * x, x)
    }

    static softPlus(x: number): number {
        return Math.log(1 + Math.E ** x)
    }

    static siLu(x: number): number {
        return x * ActivationFunctions.sigmoid(x)
    }

    static tanh(x: number): number {
        return (Math.E ** x - Math.E ** -x) / (Math.E ** x + Math.E ** -x)
    }

    static sign(x: number): number {
        return x < 0 ? -1 : 1
    }
}
