const reason = (num) => num < 5;
function filtr (aray, reason){
  const result = [];
  for (iter in aray) {
    if (reason(aray[iter])) {
      result.push(aray[iter]);
    }  
  } 
  console.log(result);
}
