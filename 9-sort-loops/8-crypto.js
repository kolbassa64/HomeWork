function ascendingorder (value, key) {
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value.length - i - 1; j++) {
      switch (key){
        case true:
        if (value[j] > value[j + 1]) {
          let temp = value[j];
          value[j] = value[j + 1];
          value[j + 1] = temp;
        }
        case false:
        if (value[j] < value[j + 1]) {
          let temp = value[j];
          value[j] = value[j + 1];
          value[j + 1] = temp;
        }
      }
    }
  }
  return value;
}
