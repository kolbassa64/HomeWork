function ascendingorder (value) {
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value.length - i - 1; j++) {
      if (value[j] > value[j + 1]) {
        let temp = value[j];
        value[j] = value[j + 1];
        value[j + 1] = temp;
      }
    }
  }
  return value;
}
function descendingorder(value){
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value.length - i - 1; j++) {
      if (value[j] < value[j + 1]) {
        let temp = value[j];
        value[j] = value[j + 1];
        value[j + 1] = temp;
      }
    }
  }
  return value;
}

function keysorting (value, key){
  key ? ascendingorder(value) : descendingorder(value); // такой вариант мне показался более читаемым, куча if-ов мне не оч
  return value;
}
