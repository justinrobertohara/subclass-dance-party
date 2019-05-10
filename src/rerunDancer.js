var MakeRerunDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="http://i11.photobucket.com/albums/a156/0access/Rerun.gif" height="80px" width="80px">');
  this.$node.css("border", "hidden");

};

MakeRerunDancer.prototype = Object.create(MakeDancer.prototype);
MakeRerunDancer.prototype.constructor = MakeRerunDancer;

