var Game;

Game = (function() {
  function Game() {}

  Game.prototype.state = {};

  Game.prototype.qwe = function() {
    return this.state = 123;
  };

  return Game;

})();
