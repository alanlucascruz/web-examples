const tasks = [
  { id: 1, description: "Aprender JavaScript", completed: true },
  { id: 2, description: "Aprender React Native", completed: true },
  { id: 3, description: "Analisar a Base de Dados", completed: true },
  { id: 4, description: "Desenvolver a Api", completed: false },
  { id: 5, description: "Desenvolver o App", completed: false },
  { id: 6, description: "Testar a Aplicação", completed: false },
];

const completedTasks = tasks.filter((item) => {
  return item.completed;
});

console.log(completedTasks);
