const Score = function(){
  this.score = 0;
}

Score.prototype.getScore = function(){
  return this.score;
}

Score.prototype.increaseScoreBy = function (numOfPoints) {
  this.score+=10;
};
