
// Takes plant as an argument, return a new object that represents the plant's new state. Use the spread operator to return the new state of the plant. If an object does not contain a water property, 'water' will be set to zero. Note that JS is still mutating the original object because it creates a shallow clone... not a deep clone. 


// const hydrate = (plant) => { 
//   return { 
//     ...plant, 
//     water: (plant.water || 0) +1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant, 
//     soil: (plant.soil || 0) +1
//   }
// };

// // REFACTOR the above 2 methods into one. 

// const changePlantState = (plant, property) => {
//   return {
//     ...plant, 
//     [property]: (plant[property] || 0 ) + 1
//   }
// }

// how we call the above function: 

// let plant = {soil: 0, light: 0, water: 0 }
// changePlantState(plant, "soil")


// This Function Stores our state. 
const storeState = () => {
  let currentState = { }; 
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}
const stateChanger = storeState();
// REFACTOR to one curried function that can now change the property, state, and value.
// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || 0) + value
    })
  }
}
// We create two functions using our function factory. We could easily create many more.
const feed = changeState("soil");
const blueFood = changeState("soil")(5);

$(document).ready(function() {
// This function has side effects because we are using JQuery. 
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
});


