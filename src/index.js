module.exports = function reverse (n) {
  let toModule = Math.abs(n);
  let toString = String(toModule);
  let result = toString.split('').reverse().join('');
  return result;
}
