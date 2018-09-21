// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
  let newArray =  array.slice(0, 2);
  
  return newArray;
}
  
const returnLastTwoDrivers = function (array){
  let newArray =  array.slice(2);
  
  return newArray;
}
  
  const selectingDrivers = 
  [returnFirstTwoDrivers,returnLastTwoDrivers];
    
  function createFareMultiplier(value){
  return function (value){
    return value * value ;
    
  }
} 



const fareDoubler = function createFareDoupler(2){
  return function (Doupler){
    return value * Doupler ;
    
  }
} 

function createFareTripler(value){
  return function (Tripler){
    return value * Tripler ;
    
  }
} 

const fareTripler = createFareTripler(3);