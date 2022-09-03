const cart = [
  { id: 1, product: "Mouse", value: 279.9 },
  { id: 2, product: "Notebook", value: 5799.0 },
  { id: 3, product: "Licença de Software", value: 247.99 },
  { id: 4, product: "Curso de Node.js", value: 497.0 },
  { id: 5, product: "Curso de React Native", value: 1497.0 },
];

const total = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.value,
  0 // Valor Inicial (Obrigatório)
);

console.log(`R$ ${total}`);
// Saída: R$ 8320.89
