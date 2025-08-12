// calculadora1.js
// Versão com bugs INTENCIONAIS nas operações de soma e subtração.

function soma(a, b) {
  // BUG: deveria somar, mas está subtraindo
  return a - b;
}

function subtrai(a, b) {
  // BUG: deveria subtrair, mas está somando
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}

// Exporte para Node/CommonJS
module.exports = { soma, subtrai, multiplica, divide };

// Execução rápida (node calculadora1.js 7 3)
if (require.main === module) {
  const a = Number(process.argv[2] || 0);
  const b = Number(process.argv[3] || 0);
  console.log(JSON.stringify({
    a, b,
    soma: soma(a,b),
    subtrai: subtrai(a,b),
    multiplica: multiplica(a,b),
    divide: b === 0 ? "erro: divisão por zero" : divide(a,b)
  }, null, 2));
}
