$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    $('.dancer').css('top', '90%');
    $('.dancer').css('position', 'absolute');
    console.log('lineup');
  });

  //interaction
  $('body').on('click', '.dancer', function(event) {
    var target = event.currentTarget;
    $(target).css('border-style', 'dotted');
    for (let i = 0; i < window.dancers.length; i++) {
      console.log(window.dancers[i].$node[0]);
      var nextTarget = window.dancers[i].$node[0];
      if ($(nextTarget).hasClass('dancer rotate') === true) {
        $(nextTarget).addClass('selected');
      }
    }
  });
  //test
  // $('.interactButton').on('click', function(event) {
  //   for (let i = 0; i < window.dancers.length; i++) {
  //     // if (window.dancers[i].hasClass('rotate') === true) {
  //     //   $('.dancer').addclass('pulse');
  //     // } else if (window.dancers[i].hasClass('pulse') === true) {
  //     //   $('.dancer').addclass('rotate');
  //     // }
  //     console.log('this', window.dancers);
  //   }
  // });

  // $('.interactButton').on('click', function (event) {

  //   for (let i = 0; i < window.dancers.length-1; i++){
  //     let dancerTop = window.dancers[i].top - window.dancers[i+1].top;
  //     let dancerLeft = window.dancers[i].left - window.dancers[i+1].left;

  //     let dancerDistance = Math.sqrt(Math.pow(dancerTop,2) + Math.pow(dancerLeft, 2))
  //     let distanceArr = [];
  //     distanceArr.push(dancerDistance)

  //   }

  // })
});
