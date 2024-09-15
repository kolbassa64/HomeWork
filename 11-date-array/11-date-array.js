function dmy (array) {
  const result = [];
  array.map(function(value){
    const temp = value.includes('/') ? value.split('/') : value.split('.');
    if ((temp[0] && temp[1] <= 31) && (temp[0] || temp[1] <= 12) && (temp[2])) {
      result.push(temp.join('.'));
    }
  })
  return result;
}