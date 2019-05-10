var MakeSnoopyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="https://i.pinimg.com/originals/02/9c/41/029c41b75f3b24232537466bca7b13ae.gif" height="80px" width="80px">');
  this.$node.css("border", "hidden");
  this.$node.addClass('pulse');
  

};

MakeSnoopyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSnoopyDancer.prototype.constructor = MakeSnoopyDancer;