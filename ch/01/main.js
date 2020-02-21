$(document).ready(function() {
  'use strict';

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c = Shape.Circle(200, 200, 50); // x, y, r
  c.fillColor = 'green';

  paper.view.draw();
})