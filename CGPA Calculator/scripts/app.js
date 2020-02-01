const form = document.querySelector('#inputs');
const scoreText = document.querySelector('.scoreText');
const subValues = [];

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  saveScores();
  generateScoreElement();
  clearScores();
  clearScoreElement();
});

document.querySelector('.addCourse').addEventListener('click', (e) => {
  e.preventDefault();
  generateElement();
  clearScores();
  removeElement(scoreText);
});

document.querySelector('.removeCourse').addEventListener('click', (e) => {
  e.preventDefault();
  removeElement(form);
  removeElement(form);
  removeElement(scoreText);
  clearScores();
});