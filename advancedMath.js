// 팩토리얼: n!
const factorial = (n) => {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// 소수 판별
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// 최대공약수 (유클리드 호제법)
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
};

// 최소공배수
const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a * b) / gcd(a, b));
};

// 제곱근
const sqrt = (n) => {
  if (n < 0) return NaN;
  return Math.sqrt(n);
};

// 거듭제곱
const pow = (base, exponent) => base ** exponent;