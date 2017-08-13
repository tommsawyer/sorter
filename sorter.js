const SorterFactory = require('./sorter_factory');

class Sorter {
  constructor(inputArr) {
    this.inputArr = inputArr;
  }

  getFieldType(value) {
    if (value instanceof Date) {
      return 'date';
    }

    return typeof value;
  }

  sort(fieldName, direction, emptyFieldsBehaviour) {
    const fieldType = this.getFieldType(this.inputArr[0][fieldName]);
    const sorterStrategy = SorterFactory.createSorterStrategy(fieldType, direction);
    const emptyFieldsStrategy = SorterFactory.createEmptyFieldsStrategy(emptyFieldsBehaviour, sorterStrategy);

    return emptyFieldsStrategy.sort(this.inputArr, fieldName);
  }
}

module.exports = Sorter;
