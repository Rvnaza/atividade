// calculadora1_fixed.js
// Versão corrigida: soma e subtração funcionando corretamente.

function soma(a, b) {
  return a + b; // corrigido
}

function subtrai(a, b) {
  return a - b; // corrigido
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}

module.exports = { soma, subtrai, multiplica, divide };

// Execução rápida no terminal (node calculadora1_fixed.js 7 3)
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
