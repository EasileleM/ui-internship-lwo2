/**
 * bouncingBall - return how many times boy's mother,
 * who is staring from the window at some height(third argument)
 * will see a ball, that was thrown by the boy from some
 * height(first argument) and that bouncing from the ground
 * to some part of initial height(second argument)
 * @example
 * // return 3
 * bouncingBall(3.0, 0.66, 1.5)
 * @param {number} heigth initial height of the ball
 * @param {number} bounce after-bounce energy saving coefficient
 * @param {number} window height of mother's window
 * @return {number} amount of times mother saw the ball
 */
export function bouncingBall(heigth, bounce, window) {
  if (!heigth || !bounce || !window) {
    return -1;
  }
  return Math.floor(Math.log(window/heigth) / Math.log(bounce)) * 2 + 1;
}
