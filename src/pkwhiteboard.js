// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color.
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


// Problem #2
// Compose a function called sound().
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

// Problem #3
// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

// Next, add the throw() function to multiple battle robots.

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
"The battle robot throws the spear 100 yards at 200 miles an hour!"
const battlerobot2 = robot("200")("300");
battlerobot2.throw()
"The battle robot throws the spear 200 yards at 300 miles an hour!"

// Problem #4
// First use closures to create three dance moves. Then add the dance moves to a dancer.

const sambaMove = (name) => ({
  samba: () => {
    return `${name} sambas!`
  }
})
const tangoMove = (name) => ({
  tango: () => {
    return `${name} tangos!`
  }
})
const waltzMove = (name) => ({
  waltz: () => {
    return `${name} does the waltz!`
  }
})

const dancer = (name) => {
  return{...sambaMove(name), ...tangoMove(name), ...waltzMove(name)};
}

const maria = dancer("Maria");