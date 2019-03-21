// 강아지 나이 계산
// 강아지 나이를 인간 나이로 바꾸는 함수 calculateDogAge를 작성하시오.
// 입력 받는 값은 강아지 나이 하나
// 인간 세계의 1년은 강아지에게는 7년이다.
// 서로 다른 입력 밧으로 총 3번 함수를 호출해본다.

const calculateDogAge = (ageNum) => {
  console.log("강아지 나이를 인간 세계의 나이로 적용하면 " + ageNum*7 + " 년이다.");
}

calculateDogAge(2);
calculateDogAge(7);
calculateDogAge(10);
