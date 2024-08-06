function descendingorder(value, key){
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value.length - i - 1; j++) {
      switch (key){
      case 1 :
      if (value[j] < value[j + 1]) {
        let temp = value[j];
        value[j] = value[j + 1];
        value[j + 1] = temp;
        break
      }
      case 2 :
      if (value[j] > value[j + 1]) {
        let temp = value[j];
        value[j] = value[j + 1];
        value[j + 1] = temp;
        break;
      }
    }
    }
}
return value;
}