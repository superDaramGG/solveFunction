//Array안의 객체 키 값을 찍어보기

const isInFoods = (foodsArray, chooseFood) => {

  let isIn = false;
  
  foodsArray.forEach(val => {
    if(val.name === chooseFood){
      isIn = true;
    }
  })
  
  if(isIn){
    console.log(chooseFood);
  } else {
    console.log("--;;;;;");
  }
}

ifInFoods([
  {name: 'curry'},
  {name: 'ramen'},
  {name: 'beef'},
  {name: 'chicken'},
], 'mango');
