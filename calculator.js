// 계산기 함수 calculator를 만드시오.
// 아래와 같은 기능을 해야함.
// calculator(1, '+', 3) => 4가 출력됨
// calculator(1, '*', 3) => 3이 출력됨
// calculator(1, '-', 3) => -2가 출력됨
// calculator(1, '/', 3) => 0.3333333333333333이 출력됨

// 서로 다른 숫자와 기호를 사용해 calculator 함수를 4번 호출하시오.

const calculator = (num1, op, num2) => {
  
  let sum;
  
  switch (op) {
    case '+':
      sum = num1 + num2;
      break;
    case '-':
      sum = num1 - num2;
      break;
    case '*':
      sum = num1 * num2;
      break;
    case '/':
      sum = num1 / num2;
      break;      
  }

  console.log(num1 + op + num2 + "=" + sum);

}

calculator(1, '+', 3);
calculator(1, '*', 3);
calculator(1, '-', 3);
calculator(1, '/', 3);
