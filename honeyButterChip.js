//120살까지 (최대값 설정해놓고)
//지금나이에서 허니버터칩을 하나씩 먹는다 치면
//몇 개를 더 먹을 수 있는가 

const MAX_AGE = 120;

const calculateSupply = (age, snack, amountPerDay) => {
  //40살에서 120살까지 80년
  const restYear = MAX_AGE - age;
  const needSnack = restYear*365*amountPerDay;
  console.log(`${MAX_AGE}까지 당신은 ${snack}이 ${needSnack}만큼 필요하다`);
}

calculateSupply(40, 'honey butter chip', 1);
