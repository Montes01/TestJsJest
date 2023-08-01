const sumar = require('./test1');
const esPar = require('./test2');
const arregloACadena = require('./test3');
const factorial = require('./test4');
const numeroMasGrande = require('./test5');
const esPalindromo = require('./test6');
const areaTriangulo = require('./test7');
const contarVocales = require('./test8');
const numeroAleatorio = require('./test9');
const distanciaEntrePuntos = require('./test10');

test('should be the double of the past number', () => {
    expect(sumar(2, 2)).toBe(4);
});

test('should return true if the number is even', () => {
    expect(esPar(2)).toBe(true);
});

test('should convert an array to a comma-separated string', () => {
    expect(arregloACadena([1, 2, 3])).toBe('1, 2, 3');
});

test('should return the factorial of a number', () => {
    expect(factorial(5)).toBe(120);
});

test('should return the largest number in an array', () => {
    expect(numeroMasGrande([1, 2, 3])).toBe(3);
});

test('should return true if the word is a palindrome', () => {
    expect(esPalindromo('racecar')).toBe(true);
});

test('should return false if the word is not a palindrome', () => {
    expect(esPalindromo('hello')).toBe(false);
});

test('should return the area of a triangle', () => {
    expect(areaTriangulo(5, 10)).toBe(25);
});

test('should count the number of vowels in a string', () => {
    expect(contarVocales('hello')).toBe(2);
});

test('should generate a random number within the given range', () => {
    const random1 = numeroAleatorio(1, 10);
    const random2 = numeroAleatorio(-100, 100);

    expect(random1).toBeGreaterThanOrEqual(1);
    expect(random1).toBeLessThanOrEqual(10);

    expect(random2).toBeGreaterThanOrEqual(-100);
    expect(random2).toBeLessThanOrEqual(100);
});

test('should calculate the distance between two points', () => {
    expect(distanciaEntrePuntos(0, 0, 3, 4)).toBe(5);
});
