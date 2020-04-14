
// class Plant {
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }
// }


const storeState = () => {
  let currentState = { }; 
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    // return (stateChangeFunction2) => {
    //   const newState = stateChangeFunction2(currentState);
    //   currentState = {...newState};
    //   return newState;
    // }
  };
};
export const stateChanger = storeState();
// REFACTOR to one curried function that can now change the property, state, and value.
// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || 0) + value
    });
  };
};


// We create two functions using our function factory. We could easily create many more.
// const plant1 = new Plant();
// const plant2 = new Plant();
// const plant3 = new Plant();

const doubleFoodChanger = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState, ...redFood(newState)};
    return newState;
  }
}
// blueFood(plant1);

// const feed = changeState("soil");
export const blueFood = changeState("soil")(5);
export const redFood = changeState("soil")(7);
export const wateringCan = changeState("water")(5);
export const sunnyDay = changeState("light")(7);

// $(document).ready(function() {
// // This function has side effects because we are using JQuery. 
//   $('#feed').click(function() {
//     const newState = stateChanger(blueFood);
//     $('#soil-value').text(newState.soil);
//     console.log(newState.soil);
//   });
// });


