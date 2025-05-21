const names = [];
const firstGrades = [];
const secondGrades = [];
const finalGrades = [];

for(i = 0; i < 3; i++) {
  names[i] = prompt("Nome: ");
  firstGrades[i] =  prompt("Primeira nota: ");
  secondGrades[i] = prompt("Segunda nota: ");
  finalGrades[i] = (+firstGrades[i] * 0.6) + (+secondGrades[i] * 0.4);
}

for(i = 0; i < 3; i++) {
  alert("Aluno: " + names[i] + "\nNota 1: " + firstGrades[i] + " Nota 2: " + secondGrades[i])
  alert("Nota final: " + finalGrades[i])
}