const Sorter = require('./sorter');

const arr = [{
  id: 1,
  name: 'Alex',
  register: new Date()
}, {
  id: null,
  name: 'John',
  register: new Date(Date.now() - 1000)
}, {
  id: 3,
  name: 'Mike',
  register: new Date(Date.now() + 1000)
}];

const sorter = new Sorter(arr);
const result = sorter.sort('id', 'desc', 'skip');

console.log(result);


