const age = parseInt(prompt("Введите ваш возраст:"));

if (isNaN(age)) {
  alert("Вы ввели некорректное значение возраста!");
} else if (age < 5) {
  alert("Вы слишком малы для использования ПК!");
} else if (age < 16) {
  alert("Вы слишком юны для использования этого сайта!");
} else if (age > 130) {
  alert("Невозможно, либо вы призрак, либо ввели некорректное значение возраста!");
} else if (age > 60) {
  alert("Добро пожаловать, почтительный пользователь!");
} else {
  alert("Добро пожаловать!");
}