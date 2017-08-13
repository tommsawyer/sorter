class EmptyFieldsStrategy {
  constructor(sorterStrategy) {
    this.sorterStrategy = sorterStrategy;
  }

  processEmptyFields(emptyFields, notEmptyFields) {
    throw new Error('method "processEmptyFields" should be overrided!');
  }

  sort(arr, fieldName) {
    const emptyFields = arr.filter(el => el[fieldName] === null);
    const notEmptyFields = arr.filter(el => el[fieldName] !== null);

    const sorterResult = this.sorterStrategy.sort(notEmptyFields, fieldName);

    return this.processEmptyFields(emptyFields, sorterResult);
  }
}

class SkipEmptyFields extends EmptyFieldsStrategy {
  processEmptyFields(emptyFields, notEmptyFields) {
    return notEmptyFields;
  }
}

class EmptyFieldsToBeginning extends EmptyFieldsStrategy {
  processEmptyFields(emptyFields, notEmptyFields) {
    return emptyFields.concat(notEmptyFields);
  }
}

class EmptyFieldsToEnd extends EmptyFieldsStrategy {
  processEmptyFields(emptyFields, notEmptyFields) {
    return notEmptyFields.concat(emptyFields);
  }
}

module.exports = {
  SkipEmptyFields, EmptyFieldsToBeginning, EmptyFieldsToEnd
}
