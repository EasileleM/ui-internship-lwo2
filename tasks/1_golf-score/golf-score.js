export function golfScore(par, strokes) {
  if (strokes === 1) return 'Hole-in-one!';
  if (strokes <= par-2) return 'Eagle';
  if (strokes === par-1) return 'Birdie';
  if (strokes === par) return 'Par';
  if (strokes === par+1) return 'Bogey';
  if (strokes === par+2) return 'Double Bogey';
  return 'Go Home!';
}

export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!',
};
