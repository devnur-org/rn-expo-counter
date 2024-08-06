export class Counter {
  static initialValue: number = 0;

  static increment(prevState: number) {
    return prevState + 1;
  }

  static decrement(prevState: number) {
    return prevState - 1;
  }

  static reset() {
    return 0;
  }

  static isZero(count: number) {
    return count === 0;
  }
}
