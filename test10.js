function distanciaEntrePuntos(x1, y1, x2, y2) {
  const distanciaX = x2 - x1;
  const distanciaY = y2 - y1;
  return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
}

module.exports = distanciaEntrePuntos;
