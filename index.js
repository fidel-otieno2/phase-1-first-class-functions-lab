// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function to multiply fare
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Fare doubler
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};
