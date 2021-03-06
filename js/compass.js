/**
 * CompassJs
 *
 * Copyright Javier Reyes Ribes 2017
 * Released under the MIT license
 */

var CompassJs = function(selector) {
  var jQCompass = $(selector);

  jQCompass.addClass('compassjs-container');

  var jQHand = $('<div>');

  jQHand.addClass('compassjs-hand');

  jQCompass.append(jQHand);


  // Instance methods

  this.delete = function() {
      jQCompass.remove();
  };

  this.setSize = function(width, height) {
    jQCompass.css({
      "width": width + 'px',
      "height": height + 'px'
    });

    jQHand.css({
      "width": (width * 2/3) + 'px',
      "height": (height * 2/3) + 'px',

      "margin-top": (height * (-1/3)) + 'px',
      "margin-left": (width * (-1/3)) + 'px'
    });
  };

  this.rotate = function (degrees) {
    jQHand.css({
      "-ms-transform": 'rotate(' + degrees + 'deg)',
      "-webkit-transform": 'rotate(' + degrees + 'deg)',
      "transform": 'rotate(' + degrees + 'deg)'
    });
  };

  this.pointTo = function(direction) {
    direction = direction.toLowerCase();

    var directions = {
      "n": 0,
      "ne": 45,
      "nw": 315,

      "s": 180,
      "se": 135,
      "sw": 225,

      "e": 90,
      "w": 270,


      "north": 0,
      "northeast": 45,
      "northwest": 315,

      "south": 180,
      "southeast": 135,
      "southwest": 225,

      "east": 90,
      "west": 270,
    };

    var
      directionDeg = directions[direction],
      directionIsValid = (directionDeg !== undefined);

    if (directionIsValid) {
      this.rotate(directionDeg);
    } else {
      try {
        console.error('Invalid direction "' + direction + '", directions supported: n/north, nw/northwest, ne/northeast, s/south, sw/southwest, se/southeast, w/west, e/east.');
      } catch(e) {}
    }
  };
};
