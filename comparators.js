class Comparator {
  constructor(direction) {
    this.compare = direction === 'desc' ?
      this.compareDesc :
      this.compareInc;
  }

  compareDesc(first, second) {
    throw new Error('method "compareDesc" must be overrided');
  }

  compareInc(first, second) {
    throw new Error('method "compareInc" must be overrided');
  }
}

class NumberComparator extends Comparator {
  compareDesc(first, second) {
    return second - first;
  }

  compareInc(first, second) {
    return first - second;
  }
}

class StringComparator extends Comparator {
  compareDesc(first, second) {
    return second.localeCompare(first);
  }

  compareInc(first, second) {
    return first.localeCompare(second);
  }
}

class DateComparator extends NumberComparator { }

class DefaultComparator extends Comparator {
  compareDesc() { return 0 };
  compareInc() { return 0 };
}

module.exports = { NumberComparator, StringComparator, DefaultComparator, DateComparator };
