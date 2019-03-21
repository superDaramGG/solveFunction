// 점을 봐주는 함수 작성 
// The Fortune Teller

// 함수 이름은 tellFortune
// 함수가 입력 받는 값은 4개 (자녀수, 배우자 이름, 사는 곳, 직업)
// 입력 받은 4개의 값을 활용해 미래를 알려주는 함수를 작성하시오.

// 출력 예제
// 당신은 X와 결혼해 Y에 살면 Z란 직업을 갖고 자녀수는 A이다.
// 스토리는 자유롭게 작성해도 되며 입력 받은 4개의 값이 모두 사용되기만 하면 된다.

// 함수 호출은 2번 할 것, 다른 입력값을 사용해서 2번 함수를 호출해본다.

const tellFortune = (kidsNum, husbandName, residence, job ) => {
  console.log("당신은 " + husbandName + "과 결혼해 " + residence + "에 살며 " + job + "직업을 갖고 자녀는 딸, 아들 " + kidsNum + "명이다.");
} 

tellFortune (2, "정해인", "뉴욕", "고고학자");
tellFortune (2, "박보검", "LA", "영화감독");
tellFortune (2, "공유", "워싱턴", "심리학자");
