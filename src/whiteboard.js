const paint = (color) => ({
  paint: (color) => {
    return `Paints ${color}`
  }
});
const painter1 = paint();
const painter2 = paint();
const painter3 = paint();
painter1.paint("green");



const sounds = (soundString) => ({
  sound: () => {
    return `${soundString}`;
  }
});
const faucet = sounds("Drip");
const oldCar = sounds("Vroom");
const sleepyBear = sounds("Picnic baskets");
faucet.sound();
oldCar.sound();
sleepyBear.sound();




function robotThrow(name) {
  return function(distance) {
    return function(speed) {
      return `${name} throws the spear ${distance} yards at ${speed} mph}`;
    }
  }
}

const robot = robotThrow("Robot")("200")("0.1");
robot;