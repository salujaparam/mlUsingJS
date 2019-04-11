gradientDescent() {
  const currentGuessesForMPG = this.features.map(row => {
    return this.m * row[0] + this.b;
  });

  const bSlope =
    (_.sum(
      currentGuessesForMPG.map((guess, i) => {
        return guess - this.labels[i][0];
      })
    ) *
      2) /
    this.features.length;

  const mSlope =
    (_.sum(
      currentGuessesForMPG.map((guess, i) => {
        return -1 * this.features[i][0] * (this.labels[i][0] - guess);
      })
    ) *
      2) /
    this.features.length;

  this.m = this.m - mSlope * this.options.learningRate;
  this.b = this.b - bSlope * this.options.learningRate;
}
