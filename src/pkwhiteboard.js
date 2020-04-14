const paintColor = (color) => ({
  paints: () => {
    return `Paints ${color}!`
  }
})

const painter1 = paintColor("green");
const painter2 = paintColor("yellow");
const painter3 = paintColor("red");
console.log(painter1.paints());
console.log(painter2.paints());
console.log(painter3.paints());

const loudNoise = (noise) => ({
  sound: () => {
    return noise;
  }
})

const faucet = loudNoise("Drip drip drip.");
const oldCar = loudNoise("Grumble grumble.");
const sleepyBear = loudNoise("Grrr...yawn");
console.log(faucet.sound());
console.log(oldCar.sound());
console.log(sleepyBear.sound());

const robot = (distance) => {
  return function(speed) {
    const obj = {
      throw: function() {
        return `The battle robot throws the spear ${distance} yards at ${speed} miles an hour!`
      }
    }
    return obj;
  }
}

const battlerobot1 = robot("100")("200");

battlerobot1.throw()
"The battlerobot1 throws the spear 100 yards at 200 miles an hour!"