export function mostPopularCar(cars) {
    const allCars = {};
    for (let i = 0; i < cars.length; i++) {
      let carList = cars[i];
      allCars[carList.make] = 0;
    }
    for (let i = 0; i < cars.length; i++) {
      let carList = cars[i];
      allCars[carList.make]++;
    }
    let counter = 0;
    let mostPopularCar = '';
    for (const car in allCars) {
      const currentMake = allCars[car];
      if (currentMake > counter) {
        counter = currentMake;
        mostPopularCar = car;
      }
    }
    return mostPopularCar;
  }