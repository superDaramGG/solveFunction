//findsArray를 이용해서 좋아하는 음식 찾기

const isInFoods = (foodsArray, chooseFood) => {
  
  const isIn = foodsArray.find(element => {
    return element === chooseFood;
  });
  console.log(isIn);
}

isInFoods(['curry','ramen','beef','chicken'],'pork');
isInFoods(['curry','ramen','beef','chicken'],'beef');
isInFoods(['curry','ramen','beef','chicken'],'mango');
