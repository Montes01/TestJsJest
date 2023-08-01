function esPalindromo(palabra) {
     const reverso = palabra.toLowerCase().split('').reverse().join('');
     return palabra === reverso;
   }
   
   module.exports = esPalindromo;
   