// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
const CuboidMaker = function(info){
  this.length = info.length;
  this.width = info.width;
  this.height = info.height;
}

CuboidMaker.prototype.volume = function(length, width, height){
  return this.length * this.width * this.height;
}


CuboidMaker.prototype.surfaceArea = function (length, width, height) {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
*/

class CuboidMaker {
  constructor(info) {
    this.length = info.length;
    this.width = info.width;
    this.height = info.height;
  }

  volume(length, width, height) {
    return this.length * this.width * this.height;
  }

  surfaceArea(length, width, height) {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(info) {
    super(info);
  }

  surfaceArea(length){
    return Math.pow(this.length, 2) * 6
  }

  volume(length, width, height) {
    return this.length * this.width * this.height;
  }
}

const cube = new CubeMaker({
  length: 8,
  width: 8,
  height: 8
});

console.log(cube.surfaceArea());
console.log(cube.volume());
