// calculadora2.js
// Outra versão com bugs INTENCIONAIS em soma e subtração.

function soma(a, b) {
  // BUG: retorna a soma com +1 "de brinde"
  return a + b + 1;
}

function subtrai(a, b) {
  // BUG: retorna a subtração com -1 a mais
  return a - b - 1;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}

module.exports = { soma, subtrai, multiplica, divide };

// Execução rápida (node calculadora2.js 7 3)
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
