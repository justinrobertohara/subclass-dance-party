var MakeColorfulDancer = function(top, left, timeBetweenSteps,colorIndex) {
  MakeDancer.call(this, top, left, timeBetweenSteps, colorIndex);

};

MakeColorfulDancer.prototype = Object.create(MakeDancer.prototype);
MakeColorfulDancer.prototype.constructor = MakeColorfulDancer;

MakeColorfulDancer.prototype.oldStep = MakeColorfulDancer.prototype.step;

MakeColorfulDancer.prototype.step = function() {
  var randomColor = ['blue', 'red', 'yellow', 'lime', 'green', 'aqua', 'purple'];
  this.oldStep();
  this.$node.toggle();
  // console.log(randomColor[colorIndex])
  // this.$node.css('border', )
};
