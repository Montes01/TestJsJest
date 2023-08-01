function contarVocales(cadena) {
    const vocales = cadena.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
  }
  
  module.exports = contarVocales;
  