// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number
function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// Properties of a node
function Person(x, y, color, size) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.size = size;
  this.connections = [];
}

// How to draw each node
Person.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

var people = [];

// Drawing each node
while (people.length < 100) {
  var size = 2
  var person = new Person(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    '#BBBBBB',
    size,
  );

  // Add ball to nodes array
  people.push(person);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
  ctx.fillRect(0, 0, width, height);
  
  for (var i = 0; i < people.length; i++) {
    people[i].draw();
    // balls[i].update();
  }
  
  // requestAnimationFrame(loop);
}

loop();
console.log(people);