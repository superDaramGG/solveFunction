//includes를 이용해서 좋아하는 음식 찍기 

const isInFoods = (foodsArray, chooseFood) => {
  console.log(foodsArray.includes(chooseFood));
}

isInFoods(['cury', 'remen', 'beef', 'chicken'], 'pork');
isInFoods(['cury', 'remen', 'beef', 'chicken'], 'beef');
isInFoods(['cury', 'remen', 'beef', 'chicken'], 'mango');
