const SorterFactory = require('./sorter_factory');

class Sorter {
  constructor(inputArr) {
    this.inputArr = inputArr;
  }

  sort(fieldName, direction, emptyFieldsBehaviour) {
    const firstField = this.inputArr[0][fieldName];

    const sorterStrategy = SorterFactory.createSorterStrategy(firstField, direction);
    const emptyFieldsStrategy = SorterFactory.createEmptyFieldsStrategy(emptyFieldsBehaviour, sorterStrategy);

    return emptyFieldsStrategy.sort(this.inputArr, fieldName);
  }
}

module.exports = Sorter;
