function encrypter(password){
  if (typeof password === 'string'){
    const res = password.split('');
      if (res.length <= 2){
        return 'Password should have more than 2 characters';
      }  
    res.reverse();
    const half = res.splice((res.length - 2), res.length - 1);
    return half.concat(res);
  }
  else {
    return 'Password should be string';
  }
}
function decrypter(value, password){
  if (typeof password === 'string' && typeof value === 'string'){ 
    const res = value.splice(0, 2);
    res.reverse();
    value.reverse();
    return res.concat(value).join('') === password;
  }
}