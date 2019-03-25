const pets = [
  {
    name: 'dog',
    age: 2,
  },
  {
    name: 'cat',
    age: 1,
  },
  {
    name: 'pig',
    age: 5,
  },
  {
    name: 'cow',
    age: 10,
  }
];

const minukPet = {
  age: 1,
};

const yeseoPet = {
  age: 10,
};

const printNameOfSameAge = (ownerPet) => {
  const animal = pets.map(val => {
    if(ownerPet.age === val.age){
      console.log(val.name);
    }
  });
}

printNameOfSameAge(minukPet);
printNameOfSameAge(yeseoPet);

//나이 정보를 담고 있는 옵젝트를 입력으로 받고 pets 배열 중
//입력으로 받은 옵젝트의 나이와 같은 나이값을 가지고 있는 동물의
//이름을 출력하는 함수 printNameOfSameAge를 작성하시오.
//printNameOfSameAge(minukPet) ==> cat 이 출력되어야 함
//printNameOfSameAge(yeseoPet) ==> cow 가 출력되어야 함

const sports = [
  {
    name: 'football',
    internship: 3,
  },
  {
    name: 'wrestling',
    internship: 1,
  },
  {
    name: 'hockey',
    internship: 2,
  },
  {
    name: 'fencing',
    intership: 10,
  },
  {
    name: 'judo',
    intership: 5,
  }
];

const yeseoPlayer = {
  internship: 2,
};

const minukPlayer = {
  internship: 1,
};

const printNameOfSameYear = (playerInternship) => {
  const year = sports.map(val => {
    if(playerInternship.internship === val.internship){
      console.log(val.name);
    }
  });
}

printNameOfSameYear(yeseoPlayer);
printNameOfSameYear(minukPlayer);
