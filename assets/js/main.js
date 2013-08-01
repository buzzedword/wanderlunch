require.config({
  baseUrl: 'assets/libs',
  paths: {
    jquery: 'jquery'
  }
});
require(["jquery"],function($){
  var directions = ["north", "south"];
  var trains = ["1", "6", "A", "F", "N"];
  var stops = [1,2,3,4,5,6,7];

  function randomize(set){
    return set[Math.floor(Math.random()*set.length)];
  }

  function trainName(name){
    return "images/" + name + "-train.png";
  }

  function pluralize(val){
    return ((val > 1)? 'stops' : 'stop');
  }

  function roll(){
    var direction = randomize(directions);
    var train = trainName(randomize(trains));
    var stop = randomize(stops);
    var plural = pluralize(stop);

    $('.direction').text(direction);
    $('.line').attr('src', train);
    $('.stops').text(stop);

    $('.pluralize').text(plural);
  }

  $(function(){
    roll();

    if (typeof window.scrollTo !== 'undefined') {
      window.scrollTo(0, 1);
    }

    $('.wanderlunch').on('click', roll);
  });
});