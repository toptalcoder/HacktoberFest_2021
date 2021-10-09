function Cube(n = 0) {
  var side = n;
  
  this.getSide = function() { return side; };
  this.setSide = function(n) {
    
    if (isNaN(n) === true) { return; }
    side = Math.abs(n);
  };
};
