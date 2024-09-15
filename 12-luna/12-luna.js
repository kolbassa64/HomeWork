const calculated = e => (e*2 < 10) ? e*2 : e*2-9;
function isvalidCard (card) {
  const result = [];
  card.split('-').join('').split('').map( (num, iter) => (iter % 2 == 0) ? result.push(calculated(num)) : result.push(parseInt(num)));
  return result.reduce((acc, cur) => acc + cur) % 10 == 0;
};
