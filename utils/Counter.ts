/**
 * The Counter class provides static methods to manage and manipulate a counter value.
 */
export class Counter {
  /**
   * The initial value of the counter.
   * @type {number}
   * @default 0
   */
  static initialValue: number = 0;

  /**
   * Increments the given counter value by 1.
   * @param {number} prevState - The current state of the counter.
   * @returns {number} The incremented value of the counter.
   */
  static increment(prevState: number): number {
    return prevState + 1;
  }

  /**
   * Decrements the given counter value by 1.
   * @param {number} prevState - The current state of the counter.
   * @returns {number} The decremented value of the counter.
   */
  static decrement(prevState: number): number {
    return prevState - 1;
  }

  /**
   * Resets the counter value to the initial value (0).
   * @returns {number} The reset value of the counter (0).
   */
  static reset(): number {
    return 0;
  }

  /**
   * Checks if the given counter value is zero.
   * @param {number} count - The value of the counter to check.
   * @returns {boolean} True if the counter value is zero, otherwise false.
   */
  static isZero(count: number): boolean {
    return count === 0;
  }
}
