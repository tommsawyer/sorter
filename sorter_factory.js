const {
  SkipEmptyFields,
  EmptyFieldsToBeginning,
  EmptyFieldsToEnd
} = require('./empty_fields_strategies');

const {
  NumberComparator,
  StringComparator,
  DateComparator,
  DefaultComparator
} = require('./comparators');

class SorterStrategy {
  constructor(comparator) {
    this.comparator = comparator;
  }

  sort(arr, fieldName) {
    return arr.slice(0).sort((first, second) => {
      return this.comparator.compare(first[fieldName], second[fieldName]);
    });
  }
}

class SorterFactory {
  static createSorterStrategy(fieldType, direction) {
    let comparator;
    switch(fieldType) {
      case 'string':
        comparator = new StringComparator(direction); break;
      case 'number':
        comparator = new NumberComparator(direction); break;
      case 'date':
        comparator = new DateComparator(direction); break;
      default:
        comparator = new DefaultComparator(direction);
    }

    return new SorterStrategy(comparator);
  }

  static createEmptyFieldsStrategy(behaviour, sorterStrategy) {
    switch(behaviour) {
      case 'start':
        return new EmptyFieldsToBeginning(sorterStrategy);
      case 'skip':
        return new SkipEmptyFields(sorterStrategy);
      case 'end':
        return new EmptyFieldsToEnd(sorterStrategy);
      default:
        return sorterStrategy;
    }
  }
}

module.exports = SorterFactory;
