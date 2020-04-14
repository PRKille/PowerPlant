const paints = (painter) => ({
  paint: (color) => {
    return `${painter.name} paints ${color}`
  }
});

const paintingPainter = (name) => {
  let painter = {
    name
  }
  return {...painter, ...paints(painter)}
};

const painter1 = paintingPainter("Steve");
"Steve paints red"


// Compose a function called sound(). You should be able to add the following functionality to the objects listed:

// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const makeSound = (sound) => {
  const item = {
    sound
  }
  return item;
  };
const disposal = makeSound("ERRRrrr");
disposal.sound;

// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

// Next, add the throw() function to multiple battle robots. A result might look something like this:

// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

function throwThings(speed) {
    return function(distance) {
      const obj = {
        throw: function() {

          return `This Battle Robot throws the spear ${speed} and it travels ${distance} feet.`;
        }
      }
      return obj;
    }
}




const battleRobot1 = throwThings("fast")("100");


