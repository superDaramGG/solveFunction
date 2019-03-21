//만약에 Array안에 선택한 음식이 있으면 콘솔로 찍기
const isInFoods = (foodsArray, chooseFood) => {
  let isIn = false;
  foodsArray.map((val, idx) => {
    if(val === chooseFood){
      isIn = true;
    }  
  });
  
  if(isIn) {
    console.log(chooseFood);
  } else {
    console.log("nooooooooo!");
  }
}

isInFoods(['curry', 'ramen', 'beef', 'chicken'], 'pork');
isInFoods(['curry', 'ramen', 'beef', 'chicken'], 'beef');
isInFoods(['curry', 'ramen', 'beef', 'chicken'], 'mango');
