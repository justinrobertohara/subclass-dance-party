var MakeColorfulDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  var colorArray = ['white', 'silver', 'gray', 'black', 'red', 'maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuchia', 'purple'];  
  var randomColor = colorArray[Math.floor(Math.random()*16)]
  this.$node.css("border", `solid ${randomColor} 10px`);

};

MakeColorfulDancer.prototype = Object.create(MakeDancer.prototype);
MakeColorfulDancer.prototype.constructor = MakeColorfulDancer;

MakeColorfulDancer.prototype.oldStep = MakeColorfulDancer.prototype.step;

MakeColorfulDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

};
